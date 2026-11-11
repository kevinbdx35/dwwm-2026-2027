// Tests for c3-compteur.js (palier 3) — run them with: node --test c3-compteur.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { createCounter } = await import(pathToFileURL(path.join(dir, 'c3-compteur.js')).href);

test('1, 2, 3', () => {
  const next = createCounter();
  assert.equal(next(), 1);
  assert.equal(next(), 2);
  assert.equal(next(), 3);
});

test('deux compteurs indépendants', () => {
  const a = createCounter();
  const b = createCounter();
  a();
  a();
  assert.equal(b(), 1);
});
