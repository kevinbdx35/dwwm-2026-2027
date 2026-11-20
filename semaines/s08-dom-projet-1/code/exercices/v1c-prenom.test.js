// Tests for v1c-prenom/logic.js — run them with: node --test v1c-prenom.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { checkFirstName } = await import(pathToFileURL(path.join(dir, 'v1c-prenom', 'logic.js')).href);

test('checkFirstName : un champ vide ou plein d’espaces', () => {
  assert.equal(checkFirstName(''), 'Écrivez votre prénom.');
  assert.equal(checkFirstName('   '), 'Écrivez votre prénom.');
});

test('checkFirstName : plus de 20 caractères', () => {
  assert.equal(checkFirstName('abcdefghijklmnopqrstu'), 'Le prénom compte 20 caractères au plus.');
});

test('checkFirstName : un prénom valide donne un texte vide, 20 caractères compris', () => {
  assert.equal(checkFirstName('  Lou '), '');
  assert.equal(checkFirstName('abcdefghijklmnopqrst'), '');
});
