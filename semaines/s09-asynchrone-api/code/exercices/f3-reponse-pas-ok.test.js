// Tests for f3-reponse-pas-ok/logic.js — run them with: node --test f3-reponse-pas-ok.test.js
import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { loadMuseums } = await import(pathToFileURL(path.join(dir, 'f3-reponse-pas-ok', 'logic.js')).href);

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

test('loadMuseums : une réponse ok donne le tableau data', async () => {
  fakeFetch({ body: ANSWER });
  assert.deepEqual(await loadMuseums('./musees.json'), ANSWER.data);
});

test('loadMuseums : un 404 lève une erreur qui contient le statut', async () => {
  fakeFetch({ ok: false, status: 404 });
  await assert.rejects(loadMuseums('./absent.json'), { name: 'Error', message: /404/ });
});

test('loadMuseums : un 500 lève une erreur qui contient le statut', async () => {
  fakeFetch({ ok: false, status: 500 });
  await assert.rejects(loadMuseums('./musees.json'), { name: 'Error', message: /500/ });
});
