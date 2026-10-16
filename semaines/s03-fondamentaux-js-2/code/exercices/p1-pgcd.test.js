// Tests for p1-pgcd.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { gcd } = await import(pathToFileURL(path.join(dir, 'p1-pgcd.js')).href);

test("48 et 18", () => {
  assert.deepEqual(gcd(48, 18), 6);
});

test("7 et 5", () => {
  assert.deepEqual(gcd(7, 5), 1);
});

test("10 et 10", () => {
  assert.deepEqual(gcd(10, 10), 10);
});

test("18 et 48", () => {
  assert.deepEqual(gcd(18, 48), 6);
});

test("0 et 4", () => {
  assert.deepEqual(gcd(0, 4), null);
});
