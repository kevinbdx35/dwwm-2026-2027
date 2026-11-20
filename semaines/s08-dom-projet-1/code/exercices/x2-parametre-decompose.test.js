// Tests for x2-parametre-decompose.js — run them with: node --test x2-parametre-decompose.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { shortCard } = await import(pathToFileURL(path.join(dir, 'x2-parametre-decompose.js')).href);

test('shortCard : le nom, puis la ville entre parenthèses', () => {
  const museum = { Nom_officiel: 'musée bigouden', Ville: "Pont-l'Abbé", Departement: 'Finistère' };
  assert.equal(shortCard(museum), "musée bigouden (Pont-l'Abbé)");
});

test("shortCard : les autres champs n'apparaissent pas", () => {
  const museum = { Identifiant: 'M0212', Nom_officiel: 'musée de Bretagne', Ville: 'Rennes', Departement: 'Ille-et-Vilaine' };
  assert.equal(shortCard(museum), 'musée de Bretagne (Rennes)');
});
