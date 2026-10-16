// Tests for r2-compter-pairs.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { countEvens } = await import(pathToFileURL(path.join(dir, 'r2-compter-pairs.js')).href);

test("mélange", () => {
  assert.deepEqual(countEvens([1, 2, 3, 4]), 2);
});

test("aucun", () => {
  assert.deepEqual(countEvens([1, 3, 5]), 0);
});

test("tableau vide", () => {
  assert.deepEqual(countEvens([]), 0);
});

test("négatifs", () => {
  assert.deepEqual(countEvens([-2, -3]), 1);
});
