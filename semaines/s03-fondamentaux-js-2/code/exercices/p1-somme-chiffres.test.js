// Tests for p1-somme-chiffres.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { digitSum } = await import(pathToFileURL(path.join(dir, 'p1-somme-chiffres.js')).href);

test("1234", () => {
  assert.deepEqual(digitSum(1234), 10);
});

test("9", () => {
  assert.deepEqual(digitSum(9), 9);
});

test("0", () => {
  assert.deepEqual(digitSum(0), 0);
});

test("1000", () => {
  assert.deepEqual(digitSum(1000), 1);
});

test("négatif", () => {
  assert.deepEqual(digitSum(-12), null);
});
