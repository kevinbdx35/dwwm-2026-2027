// Tests for consolidation/c1c-musees-d-un-departement/logic.js — run them with: node --test c1c-musees-d-un-departement.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { departmentCountLater } = await import(pathToFileURL(path.join(dir, 'consolidation', 'c1c-musees-d-un-departement', 'logic.js')).href);

test('departmentCountLater : le nombre de musées du Morbihan', async () => {
  assert.equal(await departmentCountLater('Morbihan'), 'Morbihan : 10 musées');
});

test("departmentCountLater : un département sans musée dans les données", async () => {
  assert.equal(await departmentCountLater('Loire'), 'Loire : 0 musées');
});
