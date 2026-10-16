// Tests for p1-prix-ttc.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { priceWithTax } = await import(pathToFileURL(path.join(dir, 'p1-prix-ttc.js')).href);

test("100 € à 20 %", () => {
  assert.deepEqual(priceWithTax(100, 20), 120);
});

test("19,99 € à 20 %", () => {
  assert.deepEqual(priceWithTax(19.99, 20), 23.99);
});

test("80 € à 5,5 %", () => {
  assert.deepEqual(priceWithTax(80, 5.5), 84.4);
});

test("prix négatif", () => {
  assert.deepEqual(priceWithTax(-5, 20), null);
});

test("taux négatif", () => {
  assert.deepEqual(priceWithTax(100, -1), null);
});
