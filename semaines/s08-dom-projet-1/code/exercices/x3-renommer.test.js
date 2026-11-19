// Tests for x3-renommer.js — run them with: node --test x3-renommer.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { toCard } = await import(pathToFileURL(path.join(dir, 'x3-renommer.js')).href);

test('toCard : trois propriétés, aux noms anglais', () => {
  const museum = { Identifiant: 'M0199', Nom_officiel: 'musée de la pêche', Ville: 'Concarneau', Departement: 'Finistère' };
  assert.deepEqual(toCard(museum), { name: 'musée de la pêche', city: 'Concarneau', department: 'Finistère' });
});

test('toCard : le musée reçu ne change pas', () => {
  const museum = { Nom_officiel: 'musée du Faouët', Ville: 'Le Faouët', Departement: 'Morbihan' };
  toCard(museum);
  assert.deepEqual(museum, { Nom_officiel: 'musée du Faouët', Ville: 'Le Faouët', Departement: 'Morbihan' });
});
