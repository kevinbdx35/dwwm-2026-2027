// Tests for t2-somme.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { sum } = await import(pathToFileURL(path.join(dir, 't2-somme.js')).href);

test("1, 2, 3", () => {
  assert.deepEqual(sum([1, 2, 3]), 6);
});

test("nombres négatifs", () => {
  assert.deepEqual(sum([-2, 5]), 3);
});

test("tableau vide", () => {
  assert.deepEqual(sum([]), 0);
});
