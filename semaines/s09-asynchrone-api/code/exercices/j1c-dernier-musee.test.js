// Tests for j1c-dernier-musee/logic.js — run them with: node --test j1c-dernier-musee.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { lastVisit, readLast } = await import(pathToFileURL(path.join(dir, 'j1c-dernier-musee', 'logic.js')).href);

test("lastVisit : un objet avec l'identifiant et le nom", () => {
  const museum = { Identifiant: 'M0194', Nom_officiel: 'musée de Dinan', Ville: 'Dinan' };
  assert.deepEqual(lastVisit(museum), { id: 'M0194', name: 'musée de Dinan' });
});

test('readLast : null reste null', () => {
  assert.equal(readLast(null), null);
});

test('readLast : un texte JSON redevient un objet', () => {
  assert.deepEqual(readLast('{"id":"M0194","name":"musée de Dinan"}'), { id: 'M0194', name: 'musée de Dinan' });
});
