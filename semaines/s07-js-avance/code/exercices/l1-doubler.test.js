// Tests for l1-doubler.js — run them with: node --test l1-doubler.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { double } = await import(pathToFileURL(path.join(dir, 'l1-doubler.js')).href);

test("1, 2, 3", () => {
  assert.deepEqual(double([1, 2, 3]), [2, 4, 6]);
});

test("négatifs", () => {
  assert.deepEqual(double([-1, 0]), [-2, 0]);
});

test("vide", () => {
  assert.deepEqual(double([]), []);
});

test("le tableau reçu n'est pas modifié", () => {
  const numbers = [1, 2];
  double(numbers);
  assert.deepEqual(numbers, [1, 2]);
});
