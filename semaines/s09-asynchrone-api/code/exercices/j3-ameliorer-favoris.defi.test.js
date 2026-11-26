// Tests for j3-ameliorer-favoris — run them with: node --test j3-ameliorer-favoris.defi.test.js
// The behaviour is already right: three of these tests READ your code (logic.js and app.js) as a text.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const folder = path.join(dir, 'j3-ameliorer-favoris');
const { toggleFavorite } = await import(pathToFileURL(path.join(folder, 'logic.js')).href);

// The code of both files, without its comments (a comment may still say "var" or "==").
function codeOf(name) {
  const text = fs.readFileSync(path.join(folder, name), 'utf8');
  return text
    .split('\n')
    .filter((line) => !line.trim().startsWith('//'))
    .join('\n');
}
const logic = codeOf('logic.js');
const app = codeOf('app.js');

test('le comportement ne change pas : toggleFavorite ajoute, puis retire', () => {
  const favorites = ['M0213'];
  assert.deepEqual(toggleFavorite(favorites, 'M0215'), ['M0213', 'M0215']);
  assert.deepEqual(toggleFavorite(['M0213', 'M0215'], 'M0213'), ['M0215']);
  assert.deepEqual(favorites, ['M0213']);
});

test('plus aucun var, et la ligne eslint-disable est supprimée', () => {
  for (const code of [logic, app]) {
    assert.doesNotMatch(code, /\bvar\s/, 'var found: use let or const');
    assert.doesNotMatch(code, /eslint-disable/, 'remove the eslint-disable line');
  }
});

test('plus aucun == ni != : seulement === et !==', () => {
  for (const code of [logic, app]) {
    assert.doesNotMatch(code, /[^=!]==[^=]/, '== found: use ===');
    assert.doesNotMatch(code, /!=[^=]/, '!= found: use !==');
  }
});

test("la lecture du stockage n'est écrite qu'une fois dans app.js", () => {
  const reads = app.split('localStorage.getItem(').length - 1;
  assert.equal(reads, 1, 'localStorage.getItem must appear exactly once in app.js');
});
