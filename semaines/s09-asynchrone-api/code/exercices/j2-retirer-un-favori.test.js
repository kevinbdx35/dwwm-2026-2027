// Tests for j2-retirer-un-favori/logic.js — run them with: node --test j2-retirer-un-favori.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { toggleFavorite, readFavorites } = await import(pathToFileURL(path.join(dir, 'j2-retirer-un-favori', 'logic.js')).href);

test("toggleFavorite : un identifiant absent s'ajoute à la fin", () => {
  assert.deepEqual(toggleFavorite(['M0199'], 'M0207'), ['M0199', 'M0207']);
});

test('toggleFavorite : un identifiant présent est retiré', () => {
  assert.deepEqual(toggleFavorite(['M0199', 'M0207', 'M0203'], 'M0207'), ['M0199', 'M0203']);
});

test('toggleFavorite : le tableau reçu ne change pas', () => {
  const favorites = ['M0199', 'M0207'];
  toggleFavorite(favorites, 'M0207');
  toggleFavorite(favorites, 'M0203');
  assert.deepEqual(favorites, ['M0199', 'M0207']);
});

test('readFavorites : null donne [], un texte JSON redevient un tableau', () => {
  assert.deepEqual(readFavorites(null), []);
  assert.deepEqual(readFavorites('["M0199"]'), ['M0199']);
});

test("readFavorites : un texte qui n'est pas du JSON donne []", () => {
  assert.deepEqual(readFavorites('M0199,M0207'), []);
});
