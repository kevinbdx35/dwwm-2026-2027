// Tests for k4-ajouter.js — run them with: node --test k4-ajouter.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { withItem } = await import(pathToFileURL(path.join(dir, 'k4-ajouter.js')).href);

test("ajout", () => {
  assert.deepEqual(withItem(["a"], "b"), ["a", "b"]);
});

test("liste vide", () => {
  assert.deepEqual(withItem([], 1), [1]);
});

test("la liste reçue n'est pas modifiée", () => {
  const list = ['a'];
  withItem(list, 'b');
  assert.deepEqual(list, ['a']);
});
