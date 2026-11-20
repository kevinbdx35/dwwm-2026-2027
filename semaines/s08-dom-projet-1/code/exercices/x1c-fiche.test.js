// Tests for x1c-fiche/logic.js — run them with: node --test x1c-fiche.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { cardTitle } = await import(pathToFileURL(path.join(dir, 'x1c-fiche', 'logic.js')).href);

test('cardTitle : le nom, une virgule, « à », la ville', () => {
  const museum = { Nom_officiel: 'musée de la pêche', Ville: 'Concarneau', Departement: 'Finistère' };
  assert.equal(cardTitle(museum), 'musée de la pêche, à Concarneau');
});

test('cardTitle : un autre musée', () => {
  const museum = { Nom_officiel: 'musée de Bretagne', Ville: 'Rennes', Departement: 'Ille-et-Vilaine' };
  assert.equal(cardTitle(museum), 'musée de Bretagne, à Rennes');
});
