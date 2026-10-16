// Tests for t6-mot-interdit.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { containsWord } = await import(pathToFileURL(path.join(dir, 't6-mot-interdit.js')).href);

test("présent, casse différente", () => {
  assert.deepEqual(containsWord("Mot de passe : Secret", "secret"), true);
});

test("absent", () => {
  assert.deepEqual(containsWord("Bonjour", "secret"), false);
});

test("mot vide", () => {
  assert.deepEqual(containsWord("abc", ""), true);
});
