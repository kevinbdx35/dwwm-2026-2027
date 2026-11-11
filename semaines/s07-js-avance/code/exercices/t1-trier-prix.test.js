// Tests for t1-trier-prix.js — run them with: node --test t1-trier-prix.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { sortPrices } = await import(pathToFileURL(path.join(dir, 't1-trier-prix.js')).href);

test("du moins cher au plus cher", () => {
  assert.deepEqual(sortPrices([25, 8, 10]), [8, 10, 25]);
});

test("des nombres, pas des textes : 9 avant 100", () => {
  assert.deepEqual(sortPrices([100, 9, 25]), [9, 25, 100]);
});

test("le tableau reçu n'est pas modifié", () => {
  const prices = [25, 8, 10];
  sortPrices(prices);
  assert.deepEqual(prices, [25, 8, 10]);
});
