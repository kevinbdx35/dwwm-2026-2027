// Tests for a3-deux-a-la-suite/logic.js — run them with: node --test a3-deux-a-la-suite.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { sameDepartment } = await import(pathToFileURL(path.join(dir, 'a3-deux-a-la-suite', 'logic.js')).href);

test('sameDepartment : deux musées du Finistère', async () => {
  assert.equal(await sameDepartment('M0199', 'M0207'), true);
});

test('sameDepartment : deux départements différents', async () => {
  assert.equal(await sameDepartment('M0194', 'M0199'), false);
});

test('sameDepartment renvoie une promesse (fonction async)', () => {
  assert.ok(sameDepartment('M0194', 'M0199') instanceof Promise);
});
