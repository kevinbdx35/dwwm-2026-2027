// Tests for e4-name-badge.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { badge } = await import(pathToFileURL(path.join(dir, 'e4-name-badge.js')).href);

test("Ada Lovelace", () => {
  assert.deepEqual(badge("Ada", "Lovelace"), "LOVELACE Ada");
});

test("lower case last name", () => {
  assert.deepEqual(badge("Grace", "hopper"), "HOPPER Grace");
});
