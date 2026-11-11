// Tests for l5-majuscules.js — run them with: node --test l5-majuscules.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { capitalizeAll } = await import(pathToFileURL(path.join(dir, 'l5-majuscules.js')).href);

test("deux prénoms", () => {
  assert.deepEqual(capitalizeAll(["ada", "linus"]), ["Ada", "Linus"]);
});

test("déjà en majuscule", () => {
  assert.deepEqual(capitalizeAll(["Grace"]), ["Grace"]);
});

test("mot vide", () => {
  assert.deepEqual(capitalizeAll([""]), [""]);
});
