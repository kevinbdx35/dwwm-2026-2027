// Tests for r1-rectangle.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

// Runs the exercise file with the given arguments and returns what it prints.
const file = path.join(process.env.EXERCISES_DIR ?? import.meta.dirname, 'r1-rectangle.js');
// A 5-second timeout turns an infinite loop into a failing test instead of a frozen terminal.
const run = (...args) =>
  execFileSync(process.execPath, [file, ...args], { encoding: 'utf8', timeout: 5000 }).trim();

test('3 × 4', () => {
  assert.equal(run('3', '4'), 'Aire : 12\nPérimètre : 14');
});

test('5 × 5', () => {
  assert.equal(run('5', '5'), 'Aire : 25\nPérimètre : 20');
});

test('2,5 × 2', () => {
  assert.equal(run('2.5', '2'), 'Aire : 5\nPérimètre : 9');
});
