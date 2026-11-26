// Tests for t4-annuler/logic.js — run them with: node --test t4-annuler.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { scheduleRemoval } = await import(pathToFileURL(path.join(dir, 't4-annuler', 'logic.js')).href);

// Waits a little: the tests use short delays (30 ms), not 5 seconds.
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

test('scheduleRemoval : onRemove est appelée après le délai, pas avant', async () => {
  let calls = 0;
  scheduleRemoval(() => {
    calls += 1;
  }, 30);
  assert.equal(calls, 0);
  await wait(120);
  assert.equal(calls, 1);
});

test('scheduleRemoval : renvoie une fonction', () => {
  const cancel = scheduleRemoval(() => {}, 10);
  assert.equal(typeof cancel, 'function');
  cancel();
});

test('scheduleRemoval : après « annuler », onRemove n\'est jamais appelée', async () => {
  let calls = 0;
  const cancel = scheduleRemoval(() => {
    calls += 1;
  }, 30);
  cancel();
  await wait(120);
  assert.equal(calls, 0);
});
