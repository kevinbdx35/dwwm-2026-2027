// Tests for v1b-code-postal/logic.js — run them with: node --test v1b-code-postal.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { checkPostcode } = await import(pathToFileURL(path.join(dir, 'v1b-code-postal', 'logic.js')).href);

test('checkPostcode : un champ vide ou plein d’espaces', () => {
  assert.equal(checkPostcode(''), 'Écrivez un code postal.');
  assert.equal(checkPostcode('   '), 'Écrivez un code postal.');
});

test('checkPostcode : trop court ou trop long', () => {
  assert.equal(checkPostcode('2990'), 'Le code postal compte 5 caractères.');
  assert.equal(checkPostcode('299000'), 'Le code postal compte 5 caractères.');
});

test('checkPostcode : un code postal valide donne un texte vide', () => {
  assert.equal(checkPostcode(' 29900 '), '');
});
