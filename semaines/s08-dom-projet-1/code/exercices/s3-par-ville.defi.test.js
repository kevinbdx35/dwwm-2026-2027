// Tests for s3-par-ville/logic.js — run them with: node --test s3-par-ville.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { sortByCity } = await import(pathToFileURL(path.join(dir, 's3-par-ville', 'logic.js')).href);
const { MUSEUMS } = await import(pathToFileURL(path.join(import.meta.dirname, 'data', 'musees-bretagne.js')).href);

test("sortByCity : Baud d'abord, Vitré à la fin", () => {
  const sorted = sortByCity(MUSEUMS);
  assert.equal(sorted.length, 34);
  assert.equal(sorted[0].Ville, 'Baud');
  assert.equal(sorted.at(-1).Ville, 'Vitré');
});

test("sortByCity : l'ordre du français, accents compris", () => {
  const museums = [{ Ville: 'Ouessant' }, { Ville: 'Étel' }, { Ville: 'Brest' }];
  assert.deepEqual(sortByCity(museums).map((museum) => museum.Ville), ['Brest', 'Étel', 'Ouessant']);
});

test('sortByCity : le tableau reçu ne change pas', () => {
  const copy = [...MUSEUMS];
  sortByCity(MUSEUMS);
  assert.deepEqual(MUSEUMS, copy);
});
