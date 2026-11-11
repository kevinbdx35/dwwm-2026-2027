// Tests for c1-saluer.js (palier 3) — run them with: node --test c1-saluer.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { makeGreeter } = await import(pathToFileURL(path.join(dir, 'c1-saluer.js')).href);

// A non-breaking space (or narrow one) before "!" is accepted: it is still a space.
const normalize = (text) => String(text).replace(/[\u00a0\u202f]/g, ' ');

test('Bonjour', () => {
  const hello = makeGreeter('Bonjour');
  assert.equal(normalize(hello('Ada')), 'Bonjour, Ada !');
});

test('deux saluts indépendants', () => {
  const hi = makeGreeter('Salut');
  const hello = makeGreeter('Bonjour');
  assert.equal(normalize(hi('Léo')), 'Salut, Léo !');
  assert.equal(normalize(hello('Léo')), 'Bonjour, Léo !');
});
