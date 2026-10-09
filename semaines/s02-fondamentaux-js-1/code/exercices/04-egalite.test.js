// Tests for 04-egalite.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

// Runs the exercise file with the given arguments and returns what it prints.
const file = path.join(process.env.EXERCISES_DIR ?? import.meta.dirname, '04-egalite.js');
// A 5-second timeout turns an infinite loop into a failing test instead of a frozen terminal.
const run = (...args) =>
  execFileSync(process.execPath, [file, ...args], { encoding: 'utf8', timeout: 5000 }).trim();

test('7 et 7', () => {
  assert.equal(run('7', '7'), 'texte === nombre : false\nNumber(texte) === nombre : true');
});

test('7 et 8', () => {
  assert.equal(run('7', '8'), 'texte === nombre : false\nNumber(texte) === nombre : false');
});

test('0 et 0', () => {
  assert.equal(run('0', '0'), 'texte === nombre : false\nNumber(texte) === nombre : true');
});
