// Tests for l4-mots-longs.js — run them with: node --test l4-mots-longs.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { longWords } = await import(pathToFileURL(path.join(dir, 'l4-mots-longs.js')).href);

test("au moins 5", () => {
  assert.deepEqual(longWords(["chat", "girafe", "musée"], 5), ["girafe", "musée"]);
});

test("tous", () => {
  assert.deepEqual(longWords(["a", "b"], 0), ["a", "b"]);
});

test("aucun", () => {
  assert.deepEqual(longWords(["a"], 3), []);
});
