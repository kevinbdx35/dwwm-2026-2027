// Tests for l3-positifs.js — run them with: node --test l3-positifs.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { positives } = await import(pathToFileURL(path.join(dir, 'l3-positifs.js')).href);

test("mélange", () => {
  assert.deepEqual(positives([3, -1, 0, 5]), [3, 5]);
});

test("aucun", () => {
  assert.deepEqual(positives([-2, 0]), []);
});

test("vide", () => {
  assert.deepEqual(positives([]), []);
});

test("le tableau reçu n'est pas modifié", () => {
  const numbers = [3, -1, 0, 5];
  positives(numbers);
  assert.deepEqual(numbers, [3, -1, 0, 5]);
});
