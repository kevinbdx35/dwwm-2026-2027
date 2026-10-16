// Tests for tri-dichotomie.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { binarySearch } = await import(pathToFileURL(path.join(dir, 'tri-dichotomie.js')).href);

test("au milieu", () => {
  assert.deepEqual(binarySearch([1, 3, 5, 7, 9], 5), 2);
});

test("au début", () => {
  assert.deepEqual(binarySearch([1, 3, 5, 7, 9], 1), 0);
});

test("à la fin", () => {
  assert.deepEqual(binarySearch([1, 3, 5, 7, 9], 9), 4);
});

test("absent", () => {
  assert.deepEqual(binarySearch([1, 3, 5, 7, 9], 4), -1);
});

test("tableau vide", () => {
  assert.deepEqual(binarySearch([], 3), -1);
});

test("un seul élément", () => {
  assert.deepEqual(binarySearch([8], 8), 0);
});
