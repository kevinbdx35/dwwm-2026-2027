// Tests for r3-majuscule.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { capitalize } = await import(pathToFileURL(path.join(dir, 'r3-majuscule.js')).href);

test("aDA", () => {
  assert.deepEqual(capitalize("aDA"), "Ada");
});

test("déjà correct", () => {
  assert.deepEqual(capitalize("Linus"), "Linus");
});

test("une lettre", () => {
  assert.deepEqual(capitalize("x"), "X");
});

test("mot vide", () => {
  assert.deepEqual(capitalize(""), "");
});
