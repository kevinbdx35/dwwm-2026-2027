// Tests for f1-charger-les-musees/logic.js — run them with: node --test f1-charger-les-musees.test.js
import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { loadMuseums } = await import(pathToFileURL(path.join(dir, 'f1-charger-les-musees', 'logic.js')).href);

// The tests never use the network: they replace fetch with a fake one, already written.
// The fake fetch remembers the addresses asked, and answers with ok, status and json(), like a real response.
const realFetch = globalThis.fetch;
function fakeFetch({ ok = true, status = 200, body = {} }) {
  const asked = [];
  globalThis.fetch = async (url) => {
    asked.push(url);
    return {
      ok,
      status,
      json: async () => {
        if (!ok) {
          // Like a real server: an error page is HTML, not data.
          throw new SyntaxError('Unexpected token \'<\', "<!DOCTYPE "... is not valid JSON');
        }
        return body;
      },
    };
  };
  return asked;
}
afterEach(() => {
  globalThis.fetch = realFetch;
});

const ANSWER = {
  data: [
    { Identifiant: 'M0194', Nom_officiel: 'musée de Dinan', Ville: 'Dinan' },
    { Identifiant: 'M0199', Nom_officiel: 'musée de la pêche', Ville: 'Concarneau' },
  ],
  meta: { page: 1, page_size: 200, total: 2 },
};

test('loadMuseums : renvoie le tableau data de la réponse', async () => {
  fakeFetch({ body: ANSWER });
  const museums = await loadMuseums('./musees.json');
  assert.deepEqual(museums, ANSWER.data);
});

test("loadMuseums : demande l'adresse reçue, une seule fois", async () => {
  const asked = fakeFetch({ body: ANSWER });
  await loadMuseums('./data/musees-bretagne.json');
  assert.deepEqual(asked, ['./data/musees-bretagne.json']);
});
