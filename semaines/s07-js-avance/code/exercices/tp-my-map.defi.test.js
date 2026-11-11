// Tests for tp-my-map.js (palier 3) — run them with: node --test tp-my-map.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { myMap } = await import(pathToFileURL(path.join(dir, 'tp-my-map.js')).href);

test('comme map : doubler', () => {
  assert.deepEqual(myMap([1, 2, 3], (n) => n * 2), [2, 4, 6]);
});

test('comme map : longueurs de mots', () => {
  assert.deepEqual(myMap(['chat', 'a'], (w) => w.length), [4, 1]);
});

test('tableau vide', () => {
  assert.deepEqual(myMap([], (n) => n), []);
});

test("le tableau reçu n'est pas modifié", () => {
  const numbers = [1, 2];
  myMap(numbers, (n) => n + 1);
  assert.deepEqual(numbers, [1, 2]);
});
