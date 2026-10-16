// Tests for t3-pairs.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { evens } = await import(pathToFileURL(path.join(dir, 't3-pairs.js')).href);

test("mélange", () => {
  assert.deepEqual(evens([1, 2, 3, 4, 6]), [2, 4, 6]);
});

test("aucun pair", () => {
  assert.deepEqual(evens([1, 3]), []);
});

test("négatifs", () => {
  assert.deepEqual(evens([-4, -3]), [-4]);
});

test('le tableau reçu n\'est pas modifié', () => {
  const numbers = [1, 2, 3];
  evens(numbers);
  assert.deepEqual(numbers, [1, 2, 3]);
});
