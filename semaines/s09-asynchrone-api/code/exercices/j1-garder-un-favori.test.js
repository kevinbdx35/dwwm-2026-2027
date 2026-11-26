// Tests for j1-garder-un-favori/logic.js — run them with: node --test j1-garder-un-favori.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { addFavorite, readFavorites } = await import(pathToFileURL(path.join(dir, 'j1-garder-un-favori', 'logic.js')).href);

test("addFavorite : l'identifiant s'ajoute à la fin", () => {
  assert.deepEqual(addFavorite([], 'M0194'), ['M0194']);
  assert.deepEqual(addFavorite(['M0194'], 'M0213'), ['M0194', 'M0213']);
});

test('addFavorite : pas de doublon', () => {
  assert.deepEqual(addFavorite(['M0194', 'M0213'], 'M0194'), ['M0194', 'M0213']);
});

test('addFavorite : le tableau reçu ne change pas', () => {
  const favorites = ['M0194'];
  const result = addFavorite(favorites, 'M0213');
  assert.deepEqual(favorites, ['M0194']);
  assert.notEqual(result, favorites);
});

test('readFavorites : null donne un tableau vide', () => {
  assert.deepEqual(readFavorites(null), []);
});

test('readFavorites : un texte JSON redevient un tableau', () => {
  assert.deepEqual(readFavorites('["M0194","M0213"]'), ['M0194', 'M0213']);
});
