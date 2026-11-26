// Tests for t3-compte-a-rebours/logic.js — run them with: node --test t3-compte-a-rebours.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { countdownSteps } = await import(pathToFileURL(path.join(dir, 't3-compte-a-rebours', 'logic.js')).href);

test("countdownSteps(3) : '3', '2', '1', puis 'Ouvert !'", () => {
  assert.deepEqual(countdownSteps(3), ['3', '2', '1', 'Ouvert !']);
});

test("countdownSteps(1) : '1', puis 'Ouvert !'", () => {
  assert.deepEqual(countdownSteps(1), ['1', 'Ouvert !']);
});

test('countdownSteps(5) : six textes, pas des nombres', () => {
  const steps = countdownSteps(5);
  assert.equal(steps.length, 6);
  assert.equal(steps[0], '5');
  assert.equal(steps.at(-1), 'Ouvert !');
});
