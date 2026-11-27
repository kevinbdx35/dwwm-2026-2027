// Tests for consolidation/c3-noms-d-un-departement/logic.js — run them with: node --test c3-noms-d-un-departement.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { namesOfDepartmentLater } = await import(pathToFileURL(path.join(dir, 'consolidation', 'c3-noms-d-un-departement', 'logic.js')).href);

test('namesOfDepartmentLater : renvoie une promesse, pas un tableau', () => {
  assert.ok(namesOfDepartmentLater("Côtes-d'Armor") instanceof Promise);
});

test("namesOfDepartmentLater : les noms des musées des Côtes-d'Armor", async () => {
  assert.deepEqual(await namesOfDepartmentLater("Côtes-d'Armor"), [
    'musée de Dinan',
    'musée Mathurin-Méheut',
    "musée d'art et d'histoire",
  ]);
});

test('namesOfDepartmentLater : un département sans musée, un tableau vide', async () => {
  assert.deepEqual(await namesOfDepartmentLater('Loire'), []);
});
