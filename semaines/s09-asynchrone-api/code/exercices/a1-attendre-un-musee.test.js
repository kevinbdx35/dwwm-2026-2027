// Tests for a1-attendre-un-musee/logic.js — run them with: node --test a1-attendre-un-musee.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { museumCity } = await import(pathToFileURL(path.join(dir, 'a1-attendre-un-musee', 'logic.js')).href);

test('museumCity : la ville du musée M0194', async () => {
  assert.equal(await museumCity('M0194'), 'Dinan');
});

test('museumCity : la ville du musée M0199', async () => {
  assert.equal(await museumCity('M0199'), 'Concarneau');
});

test('museumCity renvoie une promesse (fonction async)', () => {
  assert.ok(museumCity('M0207') instanceof Promise);
});
