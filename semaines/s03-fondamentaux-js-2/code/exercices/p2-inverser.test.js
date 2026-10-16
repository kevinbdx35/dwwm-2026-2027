// Tests for p2-inverser.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { reverse } = await import(pathToFileURL(path.join(dir, 'p2-inverser.js')).href);

test("chat", () => {
  assert.deepEqual(reverse("chat"), "tahc");
});

test("une lettre", () => {
  assert.deepEqual(reverse("a"), "a");
});

test("texte vide", () => {
  assert.deepEqual(reverse(""), "");
});

test("avec espace", () => {
  assert.deepEqual(reverse("ab c"), "c ba");
});
