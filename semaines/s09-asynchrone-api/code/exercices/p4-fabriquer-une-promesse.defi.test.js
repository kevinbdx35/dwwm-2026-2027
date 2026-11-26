// Tests for p4-fabriquer-une-promesse/logic.js — run them with: node --test p4-fabriquer-une-promesse.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { wait } = await import(pathToFileURL(path.join(dir, 'p4-fabriquer-une-promesse', 'logic.js')).href);

test('wait : renvoie une promesse', () => {
  assert.ok(wait(10, 'ok') instanceof Promise);
});

test('wait : la promesse donne la valeur reçue', async () => {
  assert.equal(await wait(10, 'prêt'), 'prêt');
});

test('wait : la promesse attend au moins le délai demandé', async () => {
  const start = Date.now();
  await wait(100, 'ok');
  assert.ok(Date.now() - start >= 95);
});
