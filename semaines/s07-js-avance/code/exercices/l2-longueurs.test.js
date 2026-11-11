// Tests for l2-longueurs.js — run them with: node --test l2-longueurs.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { lengths } = await import(pathToFileURL(path.join(dir, 'l2-longueurs.js')).href);

test("deux mots", () => {
  assert.deepEqual(lengths(["chat", "a"]), [4, 1]);
});

test("mot vide", () => {
  assert.deepEqual(lengths([""]), [0]);
});

test("vide", () => {
  assert.deepEqual(lengths([]), []);
});
