// Tests for s1c-identifiant/logic.js — run them with: node --test s1c-identifiant.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { idLabel } = await import(pathToFileURL(path.join(dir, 's1c-identifiant', 'logic.js')).href);

test('idLabel : le nom, puis l’identifiant entre parenthèses', () => {
  const museum = { Identifiant: 'M0194', Nom_officiel: 'musée de Dinan', Ville: 'Dinan' };
  assert.equal(idLabel(museum), 'musée de Dinan (M0194)');
});

test('idLabel : un nom avec une apostrophe', () => {
  const museum = { Identifiant: 'M0196', Nom_officiel: "musée d'art et d'histoire", Ville: 'Saint-Brieuc' };
  assert.equal(idLabel(museum), "musée d'art et d'histoire (M0196)");
});
