// Tests for e1-tea-timer.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { remainingMinutes } = await import(pathToFileURL(path.join(dir, 'e1-tea-timer.js')).href);

test("2 minutes elapsed", () => {
  assert.deepEqual(remainingMinutes(2), 3);
});

test("just started", () => {
  assert.deepEqual(remainingMinutes(0), 5);
});

test("exactly 5", () => {
  assert.deepEqual(remainingMinutes(5), 0);
});

test("too long", () => {
  assert.deepEqual(remainingMinutes(8), 0);
});
