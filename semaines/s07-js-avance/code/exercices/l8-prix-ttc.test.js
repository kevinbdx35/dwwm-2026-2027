// Tests for l8-prix-ttc.js — run them with: node --test l8-prix-ttc.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { pricesWithTax } = await import(pathToFileURL(path.join(dir, 'l8-prix-ttc.js')).href);

test("trois prix", () => {
  assert.deepEqual(pricesWithTax([10, 50, 5]), [12, 60, 6]);
});

test("arrondi au centime", () => {
  assert.deepEqual(pricesWithTax([9.99]), [11.99]);
});

test("vide", () => {
  assert.deepEqual(pricesWithTax([]), []);
});

test("le tableau reçu n'est pas modifié", () => {
  const prices = [10, 50];
  pricesWithTax(prices);
  assert.deepEqual(prices, [10, 50]);
});
