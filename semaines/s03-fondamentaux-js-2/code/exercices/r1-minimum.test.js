// Tests for r1-minimum.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { minimum } = await import(pathToFileURL(path.join(dir, 'r1-minimum.js')).href);

test("mélange", () => {
  assert.deepEqual(minimum([7, 3, 12]), 3);
});

test("négatifs", () => {
  assert.deepEqual(minimum([-1, -9, 4]), -9);
});

test("tableau vide", () => {
  assert.deepEqual(minimum([]), null);
});
