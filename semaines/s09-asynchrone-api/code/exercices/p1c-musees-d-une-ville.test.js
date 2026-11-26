// Tests for p1c-musees-d-une-ville/logic.js — run them with: node --test p1c-musees-d-une-ville.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { cityCountLater } = await import(pathToFileURL(path.join(dir, 'p1c-musees-d-une-ville', 'logic.js')).href);

test('cityCountLater : renvoie une promesse, pas un texte', () => {
  assert.ok(cityCountLater('Rennes') instanceof Promise);
});

test('cityCountLater : la promesse donne « ville : nombre musées »', async () => {
  assert.equal(await cityCountLater('Rennes'), 'Rennes : 3 musées');
});

test('cityCountLater : une autre ville', async () => {
  assert.equal(await cityCountLater('Vannes'), 'Vannes : 2 musées');
});
