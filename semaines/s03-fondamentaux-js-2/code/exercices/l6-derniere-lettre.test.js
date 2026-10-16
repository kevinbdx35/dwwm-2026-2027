// Tests for l6-derniere-lettre.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { lastLetter } = await import(pathToFileURL(path.join(dir, 'l6-derniere-lettre.js')).href);

test("chat", () => {
  assert.deepEqual(lastLetter("chat"), "t");
});

test("une seule lettre", () => {
  assert.deepEqual(lastLetter("a"), "a");
});

test("mot vide", () => {
  assert.deepEqual(lastLetter(""), null);
});

test("pas de mot", () => {
  assert.deepEqual(lastLetter(), null);
});
