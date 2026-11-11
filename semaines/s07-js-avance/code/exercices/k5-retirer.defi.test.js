// Tests for k5-retirer.js (palier 3) — run them with: node --test k5-retirer.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { withoutIndex } = await import(pathToFileURL(path.join(dir, 'k5-retirer.js')).href);

test("au milieu", () => {
  assert.deepEqual(withoutIndex(["a", "b", "c"], 1), ["a", "c"]);
});

test("au début", () => {
  assert.deepEqual(withoutIndex(["a", "b"], 0), ["b"]);
});

test("à la fin", () => {
  assert.deepEqual(withoutIndex(["a", "b"], 1), ["a"]);
});

test("la liste reçue n'est pas modifiée", () => {
  const list = ['a', 'b'];
  withoutIndex(list, 0);
  assert.deepEqual(list, ['a', 'b']);
});
