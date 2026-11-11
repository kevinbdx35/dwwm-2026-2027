// Tests for m1-nom-complet.js — run them with: node --test m1-nom-complet.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { fullName } = await import(pathToFileURL(path.join(dir, 'm1-nom-complet.js')).href);

test("Ada", () => {
  assert.deepEqual(fullName({"firstName": "Ada", "lastName": "Lovelace"}), "Ada Lovelace");
});

test("Linus", () => {
  assert.deepEqual(fullName({"firstName": "Linus", "lastName": "Torvalds"}), "Linus Torvalds");
});
