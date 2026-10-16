// Tests for tri-bulles.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { bubbleSort } = await import(pathToFileURL(path.join(dir, 'tri-bulles.js')).href);

test("désordre", () => {
  assert.deepEqual(bubbleSort([5, 2, 9, 1, 7]), [1, 2, 5, 7, 9]);
});

test("déjà trié", () => {
  assert.deepEqual(bubbleSort([1, 2, 3]), [1, 2, 3]);
});

test("ordre inverse", () => {
  assert.deepEqual(bubbleSort([4, 3, 2, 1]), [1, 2, 3, 4]);
});

test("doublons", () => {
  assert.deepEqual(bubbleSort([3, 1, 3, 2]), [1, 2, 3, 3]);
});

test("vide", () => {
  assert.deepEqual(bubbleSort([]), []);
});

test("un seul", () => {
  assert.deepEqual(bubbleSort([8]), [8]);
});

test('le tableau reçu n\'est pas modifié', () => {
  const numbers = [3, 1, 2];
  bubbleSort(numbers);
  assert.deepEqual(numbers, [3, 1, 2]);
});
