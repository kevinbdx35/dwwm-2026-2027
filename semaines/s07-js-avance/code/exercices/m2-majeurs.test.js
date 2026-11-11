// Tests for m2-majeurs.js — run them with: node --test m2-majeurs.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { adultNames } = await import(pathToFileURL(path.join(dir, 'm2-majeurs.js')).href);

test("mélange", () => {
  assert.deepEqual(adultNames([{"name": "Ada", "age": 36}, {"name": "Léo", "age": 12}, {"name": "Sam", "age": 18}]), ["Ada", "Sam"]);
});

test("aucun", () => {
  assert.deepEqual(adultNames([{"name": "Léo", "age": 12}]), []);
});

test("vide", () => {
  assert.deepEqual(adultNames([]), []);
});

test("le tableau reçu n'est pas modifié", () => {
  const people = [{ name: 'Ada', age: 36 }, { name: 'Léo', age: 12 }];
  adultNames(people);
  assert.deepEqual(people, [{ name: 'Ada', age: 36 }, { name: 'Léo', age: 12 }]);
});
