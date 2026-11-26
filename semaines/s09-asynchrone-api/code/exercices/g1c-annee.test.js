// Tests for g1c-annee/logic.js — run them with: node --test g1c-annee.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { parseYear } = await import(pathToFileURL(path.join(dir, 'g1c-annee', 'logic.js')).href);

test('parseYear : une année valide est renvoyée en nombre', () => {
  assert.equal(parseYear(' 1985 '), 1985);
});

test('parseYear : un texte vide lève « Veuillez écrire une année. »', () => {
  assert.throws(() => parseYear(''), { message: 'Veuillez écrire une année.' });
});

test('parseYear : un texte qui n’est pas un nombre lève « L’année doit être un nombre. »', () => {
  assert.throws(() => parseYear('abc'), { message: "L'année doit être un nombre." });
});

test('parseYear : une année après 2026 lève « L’année ne peut pas être dans le futur. »', () => {
  assert.throws(() => parseYear('2050'), { message: "L'année ne peut pas être dans le futur." });
  assert.equal(parseYear('2026'), 2026);
});
