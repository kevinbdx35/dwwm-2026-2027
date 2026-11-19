// Tests for v1-champ-obligatoire/logic.js — run them with: node --test v1-champ-obligatoire.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { checkQuery } = await import(pathToFileURL(path.join(dir, 'v1-champ-obligatoire', 'logic.js')).href);

test('checkQuery : un champ vide ou plein d’espaces', () => {
  assert.equal(checkQuery(''), 'Écrivez un nom ou une ville.');
  assert.equal(checkQuery('   '), 'Écrivez un nom ou une ville.');
});

test('checkQuery : un seul caractère', () => {
  assert.equal(checkQuery(' a '), 'Écrivez au moins 2 caractères.');
});

test('checkQuery : une recherche valide donne un texte vide', () => {
  assert.equal(checkQuery('  Brest '), '');
});
