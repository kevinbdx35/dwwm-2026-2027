// Tests for defi-s08-frise/logic.js (palier 3) — run them with: node --test defi-s08-frise.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { sortByYear, filterByTheme, countByTheme } = await import(pathToFileURL(path.join(dir, 'defi-s08-frise', 'logic.js')).href);

// Other invented dates, not in the same order as in frise.js.
const dates = () => [
  { year: 1950, title: 'La radio', text: '', theme: 'technique' },
  { year: 1880, title: 'Le mur', text: '', theme: 'batiment' },
  { year: 1905, title: 'Le phare', text: '', theme: 'technique' },
];

test('sortByYear : de la plus ancienne date à la plus récente', () => {
  assert.deepEqual(sortByYear(dates()).map((date) => date.year), [1880, 1905, 1950]);
});

test('sortByYear : le tableau reçu ne change pas', () => {
  const received = dates();
  const sorted = sortByYear(received);
  assert.equal(sorted.length, 3);
  assert.deepEqual(received.map((date) => date.year), [1950, 1880, 1905]);
});

test('filterByTheme : seulement les dates du thème donné', () => {
  assert.deepEqual(filterByTheme(dates(), 'technique').map((date) => date.title), ['La radio', 'Le phare']);
});

test("filterByTheme : le thème 'tous' garde toutes les dates", () => {
  assert.equal(filterByTheme(dates(), 'tous').length, 3);
});

test('countByTheme : le nombre de dates de chaque thème', () => {
  assert.deepEqual(countByTheme(dates()), { technique: 2, batiment: 1 });
});
