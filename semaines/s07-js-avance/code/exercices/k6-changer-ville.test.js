// Tests for k6-changer-ville.js — run them with: node --test k6-changer-ville.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { withCity } = await import(pathToFileURL(path.join(dir, 'k6-changer-ville.js')).href);

test("nouvelle ville", () => {
  assert.deepEqual(withCity({"name": "Ada", "city": "Londres"}, "Paris"), {"name": "Ada", "city": "Paris"});
});

test("l'objet reçu n'est pas modifié", () => {
  const person = { name: 'Ada', city: 'Londres' };
  withCity(person, 'Paris');
  assert.deepEqual(person, { name: 'Ada', city: 'Londres' });
});

test("les autres propriétés sont gardées", () => {
  assert.deepEqual(withCity({ name: 'Ada', city: 'Londres', age: 36 }, 'Paris'), { name: 'Ada', city: 'Paris', age: 36 });
});
