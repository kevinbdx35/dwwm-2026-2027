// Tests for p1b-ordre-des-lignes/logic.js — run them with: node --test p1b-ordre-des-lignes.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { upperNameLater } = await import(pathToFileURL(path.join(dir, 'p1b-ordre-des-lignes', 'logic.js')).href);

test('upperNameLater : la promesse donne le nom en majuscules', async () => {
  assert.equal(await upperNameLater('M0199'), 'MUSÉE DE LA PÊCHE');
});

test('upperNameLater : un autre musée', async () => {
  assert.equal(await upperNameLater('M0194'), 'MUSÉE DE DINAN');
});
