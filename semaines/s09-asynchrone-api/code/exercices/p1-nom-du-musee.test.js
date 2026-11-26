// Tests for p1-nom-du-musee/logic.js — run them with: node --test p1-nom-du-musee.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { museumLabelLater } = await import(pathToFileURL(path.join(dir, 'p1-nom-du-musee', 'logic.js')).href);

test('museumLabelLater : renvoie une promesse, pas un texte', () => {
  assert.ok(museumLabelLater('M0199') instanceof Promise);
});

test('museumLabelLater : la promesse donne « nom - ville »', async () => {
  assert.equal(await museumLabelLater('M0199'), 'musée de la pêche - Concarneau');
});

test('museumLabelLater : un autre musée', async () => {
  assert.equal(await museumLabelLater('M0194'), 'musée de Dinan - Dinan');
});
