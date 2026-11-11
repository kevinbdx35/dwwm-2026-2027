// Tests for m4-panier.js — run them with: node --test m4-panier.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { cartTotal } = await import(pathToFileURL(path.join(dir, 'm4-panier.js')).href);

test("deux articles", () => {
  assert.deepEqual(cartTotal([{"name": "stylo", "price": 1.5, "quantity": 4}, {"name": "cahier", "price": 3, "quantity": 2}]), 12);
});

test("vide", () => {
  assert.deepEqual(cartTotal([]), 0);
});

test("le tableau reçu n'est pas modifié", () => {
  const items = [{ name: 'stylo', price: 1.5, quantity: 4 }];
  cartTotal(items);
  assert.deepEqual(items, [{ name: 'stylo', price: 1.5, quantity: 4 }]);
});
