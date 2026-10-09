// Tests for lint-moi.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

// Runs the exercise file with the given arguments and returns what it prints.
const file = path.join(process.env.EXERCISES_DIR ?? import.meta.dirname, 'lint-moi.js');
// A 5-second timeout turns an infinite loop into a failing test instead of a frozen terminal.
const run = (...args) =>
  execFileSync(process.execPath, [file, ...args], { encoding: 'utf8', timeout: 5000 }).trim();

test('avec un prénom', () => {
  assert.equal(run('Ada'), 'Bonjour Ada !');
});

test('sans prénom', () => {
  assert.equal(run(), 'Donnez un prénom : node lint-moi.js Ada');
});
