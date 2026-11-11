// Tests for dc4-total-visites.js — run them with: node --test dc4-total-visites.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { totalVisits } = await import(pathToFileURL(path.join(dir, 'dc4-total-visites.js')).href);

test("deux musées", () => {
  assert.equal(totalVisits([{ total: 100 }, { total: 50 }]), 150);
});

test("total null : compte pour 0", () => {
  assert.equal(totalVisits([{ total: 100 }, { total: null }]), 100);
});

test("total absent : compte pour 0", () => {
  assert.equal(totalVisits([{ total: 100 }, { name: 'musée sans total' }]), 100);
});

test("vide", () => {
  assert.equal(totalVisits([]), 0);
});

const { readFileSync } = await import('node:fs');
// The museums already cleaned (114 museums, data/LISEZMOI.md) always live next to this test file.
const museums = JSON.parse(readFileSync(path.join(import.meta.dirname, 'data', 'musees-grand-est-2019-propres.json'), 'utf8'));

test('le vrai fichier : 2 690 959 entrées en 2019', () => {
  assert.equal(totalVisits(museums), 2690959);
});
