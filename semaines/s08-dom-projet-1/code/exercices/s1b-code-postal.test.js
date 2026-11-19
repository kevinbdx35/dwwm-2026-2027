// Tests for s1b-code-postal/logic.js — run them with: node --test s1b-code-postal.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { postalLabel } = await import(pathToFileURL(path.join(dir, 's1b-code-postal', 'logic.js')).href);

test('postalLabel : le code postal, une espace, la ville', () => {
  const museum = { Nom_officiel: 'musée de la pêche', Code_postal: '29900', Ville: 'Concarneau' };
  assert.equal(postalLabel(museum), '29900 Concarneau');
});

test('postalLabel : un autre musée', () => {
  const museum = { Nom_officiel: 'musée de Dinan', Code_postal: '22100', Ville: 'Dinan' };
  assert.equal(postalLabel(museum), '22100 Dinan');
});
