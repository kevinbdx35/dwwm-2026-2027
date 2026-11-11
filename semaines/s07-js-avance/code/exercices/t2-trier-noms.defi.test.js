// Tests for t2-trier-noms.js (palier 3) — run them with: node --test t2-trier-noms.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { sortNames } = await import(pathToFileURL(path.join(dir, 't2-trier-noms.js')).href);

test("ordre alphabétique français, accents compris", () => {
  assert.deepEqual(sortNames(['Zillisheim', 'Échirolles', 'Dinan']), ['Dinan', 'Échirolles', 'Zillisheim']);
});

test("majuscules et minuscules mélangées", () => {
  assert.deepEqual(sortNames(['musée B', 'Musée C', 'musée A']), ['musée A', 'musée B', 'Musée C']);
});

test("le tableau reçu n'est pas modifié", () => {
  const names = ['b', 'a'];
  sortNames(names);
  assert.deepEqual(names, ['b', 'a']);
});
