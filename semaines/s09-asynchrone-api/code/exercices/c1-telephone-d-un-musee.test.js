// Tests for consolidation/c1-telephone-d-un-musee/logic.js — run them with: node --test c1-telephone-d-un-musee.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { phoneLater } = await import(pathToFileURL(path.join(dir, 'consolidation', 'c1-telephone-d-un-musee', 'logic.js')).href);

test('phoneLater : renvoie une promesse, pas un texte', () => {
  assert.ok(phoneLater('M0194') instanceof Promise);
});

test('phoneLater : la promesse donne « nom : téléphone »', async () => {
  assert.equal(await phoneLater('M0194'), 'musée de Dinan : 02 96 39 45 20');
});

test('phoneLater : un autre musée', async () => {
  assert.equal(await phoneLater('M0199'), 'musée de la pêche : 02 98 97 10 20');
});
