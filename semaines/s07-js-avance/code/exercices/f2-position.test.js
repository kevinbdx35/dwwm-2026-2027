// Tests for f2-position.js — run them with: node --test f2-position.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { positionOf } = await import(pathToFileURL(path.join(dir, 'f2-position.js')).href);

test("la position d'un musée", () => {
  assert.equal(positionOf(['musée A', 'musée B', 'musée C'], 'musée B'), 1);
});

test("le premier : 0", () => {
  assert.equal(positionOf(['musée A', 'musée B'], 'musée A'), 0);
});

test("absent : -1", () => {
  assert.equal(positionOf(['musée A'], 'musée Z'), -1);
});
