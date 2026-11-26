// Tests for t1-horaire-differe/logic.js — run them with: node --test t1-horaire-differe.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { openingMessage } = await import(pathToFileURL(path.join(dir, 't1-horaire-differe', 'logic.js')).href);

const museum = { Nom_officiel: 'musée de Dinan', Ville: 'Dinan' };

test("openingMessage : ouvert à 14 h", () => {
  assert.equal(openingMessage(museum, 14), "musée de Dinan : ouvert jusqu'à 18 h");
});

test('openingMessage : fermé à 9 h', () => {
  assert.equal(openingMessage(museum, 9), 'musée de Dinan : fermé');
});

test('openingMessage : ouvert dès 10 h, fermé à 18 h pile', () => {
  assert.equal(openingMessage(museum, 10), "musée de Dinan : ouvert jusqu'à 18 h");
  assert.equal(openingMessage(museum, 18), 'musée de Dinan : fermé');
});

test('openingMessage : le nom vient du musée reçu', () => {
  const other = { Nom_officiel: 'musée de la pêche', Ville: 'Concarneau' };
  assert.equal(openingMessage(other, 20), 'musée de la pêche : fermé');
});
