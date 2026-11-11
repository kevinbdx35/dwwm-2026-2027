// Tests for tp-my-filter.js (palier 3) — run them with: node --test tp-my-filter.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { myFilter } = await import(pathToFileURL(path.join(dir, 'tp-my-filter.js')).href);

test('comme filter : les pairs', () => {
  assert.deepEqual(myFilter([1, 2, 3, 4], (n) => n % 2 === 0), [2, 4]);
});

test('aucun élément gardé', () => {
  assert.deepEqual(myFilter([1, 3], (n) => n > 10), []);
});

test('tableau vide', () => {
  assert.deepEqual(myFilter([], () => true), []);
});

test("le tableau reçu n'est pas modifié", () => {
  const numbers = [1, 2, 3, 4];
  myFilter(numbers, (n) => n % 2 === 0);
  assert.deepEqual(numbers, [1, 2, 3, 4]);
});
