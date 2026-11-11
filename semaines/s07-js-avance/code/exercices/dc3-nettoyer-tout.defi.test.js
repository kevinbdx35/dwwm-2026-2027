// Tests for dc3-nettoyer-tout.js (palier 3) — run them with: node --test dc3-nettoyer-tout.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { cleanAll } = await import(pathToFileURL(path.join(dir, 'dc3-nettoyer-tout.js')).href);

const { readFileSync } = await import('node:fs');
// The frozen open data extract always lives next to this test file.
const raw = JSON.parse(readFileSync(path.join(import.meta.dirname, 'data', 'musees-grand-est-2019.json'), 'utf8'));

test('le vrai fichier : 114 musées après nettoyage', () => {
  assert.equal(cleanAll(raw).length, 114);
});

test('plus aucune ligne sans identifiant', () => {
  assert.ok(cleanAll(raw).every((museum) => museum.id !== ''));
});

test('chaque identifiant une seule fois', () => {
  const ids = cleanAll(raw).map((museum) => museum.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('les noms sont sans espaces parasites', () => {
  assert.ok(cleanAll(raw).every((museum) => museum.name === museum.name.trim()));
});

test('le doublon M0304 : la première ligne rencontrée est gardée', () => {
  const copies = cleanAll(raw).filter((museum) => museum.id === 'M0304');
  assert.equal(copies.length, 1);
  assert.equal(copies[0].total, 0);
});
