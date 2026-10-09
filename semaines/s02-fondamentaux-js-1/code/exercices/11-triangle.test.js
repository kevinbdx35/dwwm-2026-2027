// Tests for 11-triangle.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

// Runs the exercise file with the given arguments and returns what it prints.
const file = path.join(process.env.EXERCISES_DIR ?? import.meta.dirname, '11-triangle.js');
// A 5-second timeout turns an infinite loop into a failing test instead of a frozen terminal.
const run = (...args) =>
  execFileSync(process.execPath, [file, ...args], { encoding: 'utf8', timeout: 5000 }).trim();

test('3 lignes', () => {
  assert.equal(run('3'), '*\n**\n***');
});

test('1 ligne', () => {
  assert.equal(run('1'), '*');
});

test('texte : nombre invalide', () => {
  assert.equal(run('abc'), 'nombre invalide');
});

test('0 : nombre invalide', () => {
  assert.equal(run('0'), 'nombre invalide');
});
