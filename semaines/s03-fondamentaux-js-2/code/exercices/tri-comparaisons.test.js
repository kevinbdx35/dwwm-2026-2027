// Tests for tri-comparaisons.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { selectionSortComparisons } = await import(pathToFileURL(path.join(dir, 'tri-comparaisons.js')).href);

test("4 éléments", () => {
  assert.deepEqual(selectionSortComparisons([4, 3, 2, 1]), 6);
});

test("8 éléments", () => {
  assert.deepEqual(selectionSortComparisons([8, 7, 6, 5, 4, 3, 2, 1]), 28);
});

test("16 éléments", () => {
  assert.deepEqual(selectionSortComparisons([16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 120);
});

test("déjà trié : autant de comparaisons", () => {
  assert.deepEqual(selectionSortComparisons([1, 2, 3, 4]), 6);
});

test("vide", () => {
  assert.deepEqual(selectionSortComparisons([]), 0);
});
