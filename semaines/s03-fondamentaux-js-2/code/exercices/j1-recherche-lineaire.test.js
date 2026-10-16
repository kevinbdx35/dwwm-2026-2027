// Tests for j1-recherche-lineaire.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { linearSearch } = await import(pathToFileURL(path.join(dir, 'j1-recherche-lineaire.js')).href);

test("présent", () => {
  assert.deepEqual(linearSearch([4, 8, 15, 16], 15), 2);
});

test("premier", () => {
  assert.deepEqual(linearSearch([4, 8], 4), 0);
});

test("doublon", () => {
  assert.deepEqual(linearSearch([1, 2, 2], 2), 1);
});

test("absent", () => {
  assert.deepEqual(linearSearch([4, 8], 5), -1);
});

test("tableau vide", () => {
  assert.deepEqual(linearSearch([], 1), -1);
});
