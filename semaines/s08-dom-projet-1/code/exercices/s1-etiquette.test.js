// Tests for s1-etiquette/logic.js — run them with: node --test s1-etiquette.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { placeLabel } = await import(pathToFileURL(path.join(dir, 's1-etiquette', 'logic.js')).href);

test('placeLabel : la ville, puis le département entre parenthèses', () => {
  const museum = { Nom_officiel: 'musée de la pêche', Ville: 'Concarneau', Departement: 'Finistère' };
  assert.equal(placeLabel(museum), 'Concarneau (Finistère)');
});

test("placeLabel : un département avec une apostrophe", () => {
  const museum = { Nom_officiel: 'musée de Dinan', Ville: 'Dinan', Departement: "Côtes-d'Armor" };
  assert.equal(placeLabel(museum), "Dinan (Côtes-d'Armor)");
});
