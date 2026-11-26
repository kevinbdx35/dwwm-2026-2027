// Tests for project #1, week 9 (US-4 and US-5) — run them with: node --test projet-1-etats.test.js
// Only loading.js is tested; the display (app.js) is checked in the browser.
// No test uses the network: fetch is replaced by a fake one, written below.
// This file works in two places: in the week folder (next to projet-1/) and at the root of your project.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Finds the folder of loading.js: projet-1/ in the week folder, or this folder in your project.
function projectFolder(base) {
  const inWeek = path.join(base, 'projet-1');
  return fs.existsSync(path.join(inWeek, 'loading.js')) ? inWeek : base;
}

const dir = projectFolder(process.env.EXERCISES_DIR || import.meta.dirname);
const { loadMuseums, stateMessage } = await import(pathToFileURL(path.join(dir, 'loading.js')).href);

const TWO_MUSEUMS = [
  { Identifiant: 'M0194', Nom_officiel: 'musée de Dinan', Ville: 'Dinan' },
  { Identifiant: 'M0199', Nom_officiel: 'musée de la pêche', Ville: 'Concarneau' },
];

// A fake fetch: it answers at once, with this status and this body, like the real one would.
function replaceFetch(status, body) {
  globalThis.fetch = async () => ({
    ok: status >= 200 && status < 300,
    status,
    json: async () => body,
  });
}

test('loadMuseums : renvoie le tableau data de la réponse', async () => {
  replaceFetch(200, { data: TWO_MUSEUMS, links: {}, meta: { total: 2 } });
  assert.deepEqual(await loadMuseums('https://exemple.test/musees'), TWO_MUSEUMS);
});

test("loadMuseums : lève une erreur quand la réponse n'est pas ok", async () => {
  replaceFetch(404, { message: 'Not Found' });
  await assert.rejects(() => loadMuseums('https://exemple.test/absent'), /404/);
});

test("stateMessage : 'loading' annonce le chargement, 'success' ne dit rien", () => {
  assert.equal(stateMessage('loading'), 'Chargement des musées...');
  assert.equal(stateMessage('success'), '');
});

test("stateMessage : 'error' dit quoi faire", () => {
  assert.equal(stateMessage('error'), 'Impossible de charger les musées. Vérifiez votre connexion, puis réessayez.');
});

test("stateMessage : 'empty' explique la liste vide", () => {
  assert.equal(stateMessage('empty'), 'Aucun musée à afficher.');
});
