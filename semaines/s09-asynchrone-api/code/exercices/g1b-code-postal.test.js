// Tests for g1b-code-postal/logic.js — run them with: node --test g1b-code-postal.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { checkPostalCode } = await import(pathToFileURL(path.join(dir, 'g1b-code-postal', 'logic.js')).href);

test('checkPostalCode : un code valide est renvoyé sans espaces autour', () => {
  assert.equal(checkPostalCode(' 29900 '), '29900');
});

test('checkPostalCode : un texte vide lève « Veuillez écrire un code postal. »', () => {
  assert.throws(() => checkPostalCode('  '), { message: 'Veuillez écrire un code postal.' });
});

test('checkPostalCode : une mauvaise longueur lève « Un code postal a 5 chiffres. »', () => {
  assert.throws(() => checkPostalCode('299'), { message: 'Un code postal a 5 chiffres.' });
});
