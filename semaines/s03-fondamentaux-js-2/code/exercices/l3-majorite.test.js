// Tests for l3-majorite.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { isAdult } = await import(pathToFileURL(path.join(dir, 'l3-majorite.js')).href);

test("18 ans", () => {
  assert.deepEqual(isAdult(18), true);
});

test("17 ans", () => {
  assert.deepEqual(isAdult(17), false);
});

test("42 ans", () => {
  assert.deepEqual(isAdult(42), true);
});
