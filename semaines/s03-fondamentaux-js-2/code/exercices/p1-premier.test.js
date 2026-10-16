// Tests for p1-premier.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { isPrime } = await import(pathToFileURL(path.join(dir, 'p1-premier.js')).href);

test("2", () => {
  assert.deepEqual(isPrime(2), true);
});

test("17", () => {
  assert.deepEqual(isPrime(17), true);
});

test("21", () => {
  assert.deepEqual(isPrime(21), false);
});

test("1", () => {
  assert.deepEqual(isPrime(1), false);
});

test("0", () => {
  assert.deepEqual(isPrime(0), false);
});

test("97", () => {
  assert.deepEqual(isPrime(97), true);
});

test("25", () => {
  assert.deepEqual(isPrime(25), false);
});
