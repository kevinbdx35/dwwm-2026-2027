// Tests for e5-count-letter.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { countLetter } = await import(pathToFileURL(path.join(dir, 'e5-count-letter.js')).href);

test("Banana", () => {
  assert.deepEqual(countLetter("Banana", "a"), 3);
});

test("upper case letter", () => {
  assert.deepEqual(countLetter("Banana", "B"), 1);
});

test("absent", () => {
  assert.deepEqual(countLetter("kiwi", "z"), 0);
});
