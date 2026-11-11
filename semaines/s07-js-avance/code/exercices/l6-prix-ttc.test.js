// Tests for l6-prix-ttc.js — run them with: node --test l6-prix-ttc.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { affordablePricesWithTax } = await import(pathToFileURL(path.join(dir, 'l6-prix-ttc.js')).href);

test("exemple", () => {
  assert.deepEqual(affordablePricesWithTax([10, 50, 5], 20), [12, 6]);
});

test("centimes", () => {
  assert.deepEqual(affordablePricesWithTax([9.99], 20), [11.99]);
});

test("aucun", () => {
  assert.deepEqual(affordablePricesWithTax([100], 20), []);
});

test("limite incluse", () => {
  assert.deepEqual(affordablePricesWithTax([10], 12), [12]);
});
