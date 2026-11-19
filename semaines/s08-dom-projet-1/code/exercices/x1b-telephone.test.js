// Tests for x1b-telephone.js — run them with: node --test x1b-telephone.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { phoneLine } = await import(pathToFileURL(path.join(dir, 'x1b-telephone.js')).href);

test('phoneLine : le nom, deux-points, le téléphone', () => {
  const museum = { Nom_officiel: 'musée de la pêche', Ville: 'Concarneau', Telephone: '02 98 97 10 20' };
  assert.equal(phoneLine(museum), 'musée de la pêche : 02 98 97 10 20');
});

test('phoneLine : un autre musée', () => {
  const museum = { Nom_officiel: 'port musée', Ville: 'Douarnenez', Telephone: '02 98 92 65 20' };
  assert.equal(phoneLine(museum), 'port musée : 02 98 92 65 20');
});
