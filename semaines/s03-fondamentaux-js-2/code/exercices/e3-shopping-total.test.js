// Tests for e3-shopping-total.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { total } = await import(pathToFileURL(path.join(dir, 'e3-shopping-total.js')).href);

test("small basket", () => {
  assert.deepEqual(total([10, 5]), 15);
});

test("discount", () => {
  assert.deepEqual(total([30, 30]), 54);
});

test("exactly 50", () => {
  assert.deepEqual(total([50]), 45);
});

test("empty basket", () => {
  assert.deepEqual(total([]), 0);
});
