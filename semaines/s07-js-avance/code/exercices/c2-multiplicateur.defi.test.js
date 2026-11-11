// Tests for c2-multiplicateur.js (palier 3) — run them with: node --test c2-multiplicateur.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { makeMultiplier } = await import(pathToFileURL(path.join(dir, 'c2-multiplicateur.js')).href);

test('triple', () => {
  assert.equal(makeMultiplier(3)(5), 15);
});

test('facteur 0', () => {
  assert.equal(makeMultiplier(0)(42), 0);
});
