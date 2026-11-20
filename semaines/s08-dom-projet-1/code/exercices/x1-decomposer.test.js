// Tests for x1-decomposer.js — run them with: node --test x1-decomposer.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { placeLine } = await import(pathToFileURL(path.join(dir, 'x1-decomposer.js')).href);

test('placeLine : la ville, une virgule, le département', () => {
  const museum = { Nom_officiel: 'musée de la pêche', Ville: 'Concarneau', Departement: 'Finistère' };
  assert.equal(placeLine(museum), 'Concarneau, Finistère');
});

test('placeLine : un autre musée', () => {
  const museum = { Nom_officiel: 'musée de Bretagne', Ville: 'Rennes', Departement: 'Ille-et-Vilaine' };
  assert.equal(placeLine(museum), 'Rennes, Ille-et-Vilaine');
});
