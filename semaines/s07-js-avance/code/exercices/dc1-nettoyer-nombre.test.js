// Tests for dc1-nettoyer-nombre.js — run them with: node --test dc1-nettoyer-nombre.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { toNumber } = await import(pathToFileURL(path.join(dir, 'dc1-nettoyer-nombre.js')).href);

test("texte numérique", () => {
  assert.deepEqual(toNumber("1449"), 1449);
});

test("vide", () => {
  assert.deepEqual(toNumber(""), null);
});

test("espaces", () => {
  assert.deepEqual(toNumber("  "), null);
});

test("pas un nombre", () => {
  assert.deepEqual(toNumber("abc"), null);
});

test("zéro", () => {
  assert.deepEqual(toNumber("0"), 0);
});
