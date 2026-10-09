// Tests for 05-prix-ttc.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

// Runs the exercise file with the given arguments and returns what it prints.
const file = path.join(process.env.EXERCISES_DIR ?? import.meta.dirname, '05-prix-ttc.js');
// A 5-second timeout turns an infinite loop into a failing test instead of a frozen terminal.
const run = (...args) =>
  execFileSync(process.execPath, [file, ...args], { encoding: 'utf8', timeout: 5000 }).trim();

test('100 € à 20 %', () => {
  assert.equal(run('100', '20'), 'Prix TTC : 120.00 €');
});

test('19,99 € à 20 %', () => {
  assert.equal(run('19.99', '20'), 'Prix TTC : 23.99 €');
});

test('80 € à 5,5 %', () => {
  assert.equal(run('80', '5.5'), 'Prix TTC : 84.40 €');
});
