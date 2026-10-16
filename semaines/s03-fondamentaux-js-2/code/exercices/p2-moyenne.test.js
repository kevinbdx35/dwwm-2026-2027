// Tests for p2-moyenne.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { average } = await import(pathToFileURL(path.join(dir, 'p2-moyenne.js')).href);

test("12, 15, 9", () => {
  assert.deepEqual(average([12, 15, 9]), 12);
});

test("une seule note", () => {
  assert.deepEqual(average([14]), 14);
});

test("10 et 15", () => {
  assert.deepEqual(average([10, 15]), 12.5);
});

test("tableau vide", () => {
  assert.deepEqual(average([]), null);
});
