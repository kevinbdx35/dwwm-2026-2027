// Tests for tri-selection.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { selectionSort } = await import(pathToFileURL(path.join(dir, 'tri-selection.js')).href);

test("désordre", () => {
  assert.deepEqual(selectionSort([5, 2, 9, 1, 7]), [1, 2, 5, 7, 9]);
});

test("déjà trié", () => {
  assert.deepEqual(selectionSort([1, 2, 3]), [1, 2, 3]);
});

test("ordre inverse", () => {
  assert.deepEqual(selectionSort([4, 3, 2, 1]), [1, 2, 3, 4]);
});

test("doublons", () => {
  assert.deepEqual(selectionSort([3, 1, 3, 2]), [1, 2, 3, 3]);
});

test("vide", () => {
  assert.deepEqual(selectionSort([]), []);
});

test("un seul", () => {
  assert.deepEqual(selectionSort([8]), [8]);
});

test('le tableau reçu n\'est pas modifié', () => {
  const numbers = [3, 1, 2];
  selectionSort(numbers);
  assert.deepEqual(numbers, [3, 1, 2]);
});
