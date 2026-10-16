// Tests for p2-voyelles.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { countVowels } = await import(pathToFileURL(path.join(dir, 'p2-voyelles.js')).href);

test("Bonjour", () => {
  assert.deepEqual(countVowels("Bonjour"), 3);
});

test("majuscules", () => {
  assert.deepEqual(countVowels("AEIOUY"), 6);
});

test("sans voyelle", () => {
  assert.deepEqual(countVowels("rythm"), 1);
});

test("texte vide", () => {
  assert.deepEqual(countVowels(""), 0);
});
