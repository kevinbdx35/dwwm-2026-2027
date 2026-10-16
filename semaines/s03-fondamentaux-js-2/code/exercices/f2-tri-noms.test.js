// Tests for f2-tri-noms.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const file = path.join(dir, 'f2-tri-noms.js');
const { sortNames } = await import(pathToFileURL(file).href);

test('trie par ordre alphabétique', () => {
  assert.deepEqual(sortNames(['Zoé', 'Alice', 'Malo', 'Chloé', 'Bob']), ['Alice', 'Bob', 'Chloé', 'Malo', 'Zoé']);
});

test('le tableau reçu ne change pas', () => {
  const names = ['Malo', 'Alice'];
  sortNames(names);
  assert.deepEqual(names, ['Malo', 'Alice']);
});

test('tableau vide, un seul prénom', () => {
  assert.deepEqual(sortNames([]), []);
  assert.deepEqual(sortNames(['Ada']), ['Ada']);
});

test('sans sort', () => {
  const code = fs.readFileSync(file, 'utf8').replace(/\/\/.*$/gm, '');
  assert.doesNotMatch(code, /\.sort\s*\(/);
});
