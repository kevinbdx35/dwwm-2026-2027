// Tests for r2-conversion.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

// Runs the exercise file with the given arguments and returns what it prints.
const file = path.join(process.env.EXERCISES_DIR ?? import.meta.dirname, 'r2-conversion.js');
// A 5-second timeout turns an infinite loop into a failing test instead of a frozen terminal.
const run = (...args) =>
  execFileSync(process.execPath, [file, ...args], { encoding: 'utf8', timeout: 5000 }).trim();

test('20 °C', () => {
  assert.equal(run('20'), '20 °C = 68 °F');
});

test('0 °C', () => {
  assert.equal(run('0'), '0 °C = 32 °F');
});

test('100 °C', () => {
  assert.equal(run('100'), '100 °C = 212 °F');
});

test('-40 °C', () => {
  assert.equal(run('-40'), '-40 °C = -40 °F');
});

test('37 °C', () => {
  assert.equal(run('37'), '37 °C = 98.6 °F');
});
