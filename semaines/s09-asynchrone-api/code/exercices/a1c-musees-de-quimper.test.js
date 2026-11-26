// Tests for a1c-musees-de-quimper/logic.js — run them with: node --test a1c-musees-de-quimper.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { namesInCity } = await import(pathToFileURL(path.join(dir, 'a1c-musees-de-quimper', 'logic.js')).href);

test('namesInCity : les deux musées de Quimper', async () => {
  assert.deepEqual(await namesInCity('Quimper'), ['musée des beaux-arts', 'musée départemental breton']);
});

test('namesInCity : un tableau vide pour une ville sans musée', async () => {
  assert.deepEqual(await namesInCity('Paris'), []);
});
