// Tests for g1-prix-invalide/logic.js — run them with: node --test g1-prix-invalide.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { parsePrice } = await import(pathToFileURL(path.join(dir, 'g1-prix-invalide', 'logic.js')).href);

test('parsePrice : un prix valide est renvoyé en nombre', () => {
  assert.equal(parsePrice(' 12.5 '), 12.5);
  assert.equal(parsePrice('0'), 0);
});

test('parsePrice : un texte vide lève « Veuillez écrire un prix. »', () => {
  assert.throws(() => parsePrice(''), { message: 'Veuillez écrire un prix.' });
  assert.throws(() => parsePrice('   '), { message: 'Veuillez écrire un prix.' });
});

test('parsePrice : un texte qui n’est pas un nombre lève « Le prix doit être un nombre. »', () => {
  assert.throws(() => parsePrice('abc'), { message: 'Le prix doit être un nombre.' });
});

test('parsePrice : un prix négatif lève « Le prix ne peut pas être négatif. »', () => {
  assert.throws(() => parsePrice('-3'), { message: 'Le prix ne peut pas être négatif.' });
});
