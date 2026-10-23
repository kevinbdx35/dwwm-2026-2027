// Tests for i4-parametre.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { queryParam } = await import(pathToFileURL(path.join(dir, 'i4-parametre.js')).href);

test("page", () => {
  assert.deepEqual(queryParam("https://exemple.fr/recherche?q=js&page=2", "page"), "2");
});

test("q", () => {
  assert.deepEqual(queryParam("https://exemple.fr/recherche?q=js&page=2", "q"), "js");
});

test("absent", () => {
  assert.deepEqual(queryParam("https://exemple.fr/", "q"), null);
});

test("pas une adresse", () => {
  assert.deepEqual(queryParam("exemple", "q"), null);
});
