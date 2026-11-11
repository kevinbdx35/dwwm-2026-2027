// Tests for r3-plus-long-reduce.js (palier 3) — run them with: node --test r3-plus-long-reduce.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { longest } = await import(pathToFileURL(path.join(dir, 'r3-plus-long-reduce.js')).href);

test("trois mots", () => {
  assert.deepEqual(longest(["le", "chat", "mange"]), "mange");
});

test("égalité", () => {
  assert.deepEqual(longest(["ab", "cd"]), "ab");
});

test("vide", () => {
  assert.deepEqual(longest([]), "");
});
