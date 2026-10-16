// Tests for p2-masquer-carte.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { maskCardNumber } = await import(pathToFileURL(path.join(dir, 'p2-masquer-carte.js')).href);

test("16 chiffres", () => {
  assert.deepEqual(maskCardNumber("1234567812345678"), "**** **** **** 5678");
});

test("autres chiffres", () => {
  assert.deepEqual(maskCardNumber("4970100000000000"), "**** **** **** 0000");
});

test("trop court", () => {
  assert.deepEqual(maskCardNumber("12345678"), null);
});

test("une lettre", () => {
  assert.deepEqual(maskCardNumber("123456781234567A"), null);
});
