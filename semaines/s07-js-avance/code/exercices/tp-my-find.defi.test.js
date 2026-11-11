// Tests for tp-my-find.js (palier 3) — run them with: node --test tp-my-find.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { myFind } = await import(pathToFileURL(path.join(dir, 'tp-my-find.js')).href);

test('le premier qui convient', () => {
  assert.equal(myFind([3, 8, 12], (n) => n > 5), 8);
});

test('aucun : undefined', () => {
  assert.equal(myFind([1, 2], (n) => n > 5), undefined);
});

test('tableau vide : undefined', () => {
  assert.equal(myFind([], () => true), undefined);
});
