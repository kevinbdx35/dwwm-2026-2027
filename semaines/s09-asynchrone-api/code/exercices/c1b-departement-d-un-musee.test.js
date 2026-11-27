// Tests for consolidation/c1b-departement-d-un-musee/logic.js — run them with: node --test c1b-departement-d-un-musee.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { departmentLater } = await import(pathToFileURL(path.join(dir, 'consolidation', 'c1b-departement-d-un-musee', 'logic.js')).href);

test('departmentLater : la promesse donne le département', async () => {
  assert.equal(await departmentLater('M0228'), 'Morbihan');
});

test('departmentLater : un autre musée', async () => {
  assert.equal(await departmentLater('M0194'), "Côtes-d'Armor");
});
