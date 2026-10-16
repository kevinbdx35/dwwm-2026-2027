// Tests for p2-maximum.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { maximum } = await import(pathToFileURL(path.join(dir, 'p2-maximum.js')).href);

test("la liste de la semaine 1", () => {
  assert.deepEqual(maximum([7, 3, 12, 5, 12, 1]), 12);
});

test("tous négatifs", () => {
  assert.deepEqual(maximum([-8, -3, -5]), -3);
});

test("un seul nombre", () => {
  assert.deepEqual(maximum([4]), 4);
});

test("tableau vide", () => {
  assert.deepEqual(maximum([]), null);
});
