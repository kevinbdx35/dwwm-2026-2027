// Tests for l1-bonjour.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { greet } = await import(pathToFileURL(path.join(dir, 'l1-bonjour.js')).href);

test("Ada", () => {
  assert.deepEqual(greet("Ada"), "Bonjour, Ada !");
});

test("Linus", () => {
  assert.deepEqual(greet("Linus"), "Bonjour, Linus !");
});
