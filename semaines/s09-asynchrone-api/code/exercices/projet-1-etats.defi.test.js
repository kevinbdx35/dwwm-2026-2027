// Palier 3 tests for project #1, week 9 — run them with: node --test projet-1-etats.defi.test.js
// No test uses the network: fetch is replaced by a fake one, written below.
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
const { loadMuseumsWithBackup } = await import(pathToFileURL(path.join(dir, 'loading.js')).href);

const API_URL = 'https://exemple.test/musees';
const BACKUP_URL = './data/musees-bretagne.json';
const FROM_API = [{ Identifiant: 'M0194', Nom_officiel: 'musée de Dinan' }];
const FROM_BACKUP = [{ Identifiant: 'M0199', Nom_officiel: 'musée de la pêche' }];

// A fake fetch: one answer per address; an address that is not listed fails like a network cut.
// It returns the list of the addresses that were asked, in order.
function replaceFetch(answers) {
  const asked = [];
  globalThis.fetch = async (url) => {
    asked.push(String(url));
    const data = answers[String(url)];
    if (data === undefined) {
      throw new TypeError('Failed to fetch');
    }
    return { ok: true, status: 200, json: async () => ({ data }) };
  };
  return asked;
}

test("loadMuseumsWithBackup : l'API répond, la copie de secours n'est pas demandée", async () => {
  const asked = replaceFetch({ [API_URL]: FROM_API, [BACKUP_URL]: FROM_BACKUP });
  assert.deepEqual(await loadMuseumsWithBackup(API_URL, BACKUP_URL), { museums: FROM_API, source: 'api' });
  assert.deepEqual(asked, [API_URL]);
});

test("loadMuseumsWithBackup : l'API ne répond pas, la copie de secours prend le relais", async () => {
  replaceFetch({ [BACKUP_URL]: FROM_BACKUP });
  assert.deepEqual(await loadMuseumsWithBackup(API_URL, BACKUP_URL), { museums: FROM_BACKUP, source: 'backup' });
});

test("loadMuseumsWithBackup : si les deux échouent, l'erreur remonte", async () => {
  replaceFetch({});
  await assert.rejects(() => loadMuseumsWithBackup(API_URL, BACKUP_URL));
});
