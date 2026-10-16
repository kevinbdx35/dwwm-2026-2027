// Tests for l5-compter-jusqua.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { countTo } = await import(pathToFileURL(path.join(dir, 'l5-compter-jusqua.js')).href);

test("jusqu'à 3", () => {
  assert.deepEqual(countTo(3), [1, 2, 3]);
});

test("jusqu'à 1", () => {
  assert.deepEqual(countTo(1), [1]);
});

test("jusqu'à 0", () => {
  assert.deepEqual(countTo(0), []);
});
