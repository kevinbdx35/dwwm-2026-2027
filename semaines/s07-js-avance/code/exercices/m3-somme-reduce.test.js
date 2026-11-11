// Tests for m3-somme-reduce.js — run them with: node --test m3-somme-reduce.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { sum } = await import(pathToFileURL(path.join(dir, 'm3-somme-reduce.js')).href);

test("1, 2, 3", () => {
  assert.deepEqual(sum([1, 2, 3]), 6);
});

test("négatifs", () => {
  assert.deepEqual(sum([-2, 5]), 3);
});

test("vide", () => {
  assert.deepEqual(sum([]), 0);
});
