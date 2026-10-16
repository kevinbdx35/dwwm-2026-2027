// Tests for l2-aire-rectangle.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { rectangleArea } = await import(pathToFileURL(path.join(dir, 'l2-aire-rectangle.js')).href);

test("3 × 4", () => {
  assert.deepEqual(rectangleArea(3, 4), 12);
});

test("2,5 × 2", () => {
  assert.deepEqual(rectangleArea(2.5, 2), 5);
});

test("0 × 7", () => {
  assert.deepEqual(rectangleArea(0, 7), 0);
});

test("largeur négative", () => {
  assert.deepEqual(rectangleArea(-1, 4), null);
});
