// Tests for consolidation/cf1c-musees-d-un-departement/logic.js — run them with: node --test cf1c-musees-d-un-departement.test.js
import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { loadDepartment } = await import(pathToFileURL(path.join(dir, 'consolidation', 'cf1c-musees-d-un-departement', 'logic.js')).href);

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
    { Identifiant: 'M0194', Nom_officiel: 'musée de Dinan', Ville: 'Dinan', Departement: "Côtes-d'Armor" },
    { Identifiant: 'M0199', Nom_officiel: 'musée de la pêche', Ville: 'Concarneau', Departement: 'Finistère' },
    { Identifiant: 'M0228', Nom_officiel: 'musée des beaux-arts', Ville: 'Vannes', Departement: 'Morbihan' },
  ],
  meta: { page: 1, page_size: 200, total: 3 },
};

test('loadDepartment : seulement les musées du département', async () => {
  fakeFetch({ body: ANSWER });
  assert.deepEqual(await loadDepartment('./musees.json', 'Finistère'), [ANSWER.data[1]]);
});

test('loadDepartment : un département sans musée, un tableau vide', async () => {
  fakeFetch({ body: ANSWER });
  assert.deepEqual(await loadDepartment('./musees.json', 'Loire'), []);
});
