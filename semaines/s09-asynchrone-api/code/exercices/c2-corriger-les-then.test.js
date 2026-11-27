// Tests for consolidation/c2-corriger-les-then/logic.js — run them with: node --test c2-corriger-les-then.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { cityLabelLater, countLater } = await import(pathToFileURL(path.join(dir, 'consolidation', 'c2-corriger-les-then', 'logic.js')).href);

test('cityLabelLater : la promesse donne « nom (ville) »', async () => {
  assert.equal(await cityLabelLater('M0194'), 'musée de Dinan (Dinan)');
});

test('countLater : le nombre de musées de Rennes', async () => {
  assert.equal(await countLater('Rennes'), 3);
});

test("countLater : une ville sans musée dans les données, 0", async () => {
  assert.equal(await countLater('Lorient'), 0);
});
