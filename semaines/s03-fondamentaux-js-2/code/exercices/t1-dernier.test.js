// Tests for t1-dernier.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { last } = await import(pathToFileURL(path.join(dir, 't1-dernier.js')).href);

test("trois nombres", () => {
  assert.deepEqual(last([4, 8, 15]), 15);
});

test("un texte", () => {
  assert.deepEqual(last(["a"]), "a");
});

test("tableau vide", () => {
  assert.deepEqual(last([]), null);
});
