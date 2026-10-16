// Tests for l4-total-panier.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { cartTotal } = await import(pathToFileURL(path.join(dir, 'l4-total-panier.js')).href);

test("trois prix", () => {
  assert.deepEqual(cartTotal([10, 5, 2.5]), 17.5);
});

test("panier vide", () => {
  assert.deepEqual(cartTotal([]), 0);
});
