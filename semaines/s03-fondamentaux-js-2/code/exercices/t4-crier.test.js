// Tests for t4-crier.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { shout } = await import(pathToFileURL(path.join(dir, 't4-crier.js')).href);

test("bonjour", () => {
  assert.deepEqual(shout("bonjour"), "BONJOUR!");
});

test("déjà en majuscules", () => {
  assert.deepEqual(shout("OK"), "OK!");
});

test("avec un accent", () => {
  assert.deepEqual(shout("éte"), "ÉTE!");
});
