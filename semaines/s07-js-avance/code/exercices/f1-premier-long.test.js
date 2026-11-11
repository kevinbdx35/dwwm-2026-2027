// Tests for f1-premier-long.js — run them with: node --test f1-premier-long.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { firstLongWord } = await import(pathToFileURL(path.join(dir, 'f1-premier-long.js')).href);

test("le premier mot d'au moins 5 lettres", () => {
  assert.equal(firstLongWord(['chat', 'girafe', 'musée'], 5), 'girafe');
});

test("aucun : undefined", () => {
  assert.equal(firstLongWord(['a', 'bc'], 5), undefined);
});

test("vide : undefined", () => {
  assert.equal(firstLongWord([], 1), undefined);
});
