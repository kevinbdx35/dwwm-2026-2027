// Tests for t5-initiales.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { initials } = await import(pathToFileURL(path.join(dir, 't5-initiales.js')).href);

test("Ada Lovelace", () => {
  assert.deepEqual(initials("Ada Lovelace"), "A. L.");
});

test("trois mots en minuscules", () => {
  assert.deepEqual(initials("grace brewster hopper"), "G. B. H.");
});

test("un seul mot", () => {
  assert.deepEqual(initials("Linus"), "L.");
});
