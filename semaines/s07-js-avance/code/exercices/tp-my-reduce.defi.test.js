// Tests for tp-my-reduce.js (palier 3) — run them with: node --test tp-my-reduce.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { myReduce } = await import(pathToFileURL(path.join(dir, 'tp-my-reduce.js')).href);

test("comme reduce : la somme", () => {
  assert.equal(myReduce([3, 8, 5], (sum, n) => sum + n, 0), 16);
});

test("comme reduce : le plus long", () => {
  assert.equal(myReduce(['le', 'chat'], (best, w) => (w.length > best.length ? w : best), ''), 'chat');
});

test("tableau vide : la valeur de départ", () => {
  assert.equal(myReduce([], (sum, n) => sum + n, 10), 10);
});

test("le tableau reçu n'est pas modifié", () => {
  const numbers = [1, 2];
  myReduce(numbers, (sum, n) => sum + n, 0);
  assert.deepEqual(numbers, [1, 2]);
});
