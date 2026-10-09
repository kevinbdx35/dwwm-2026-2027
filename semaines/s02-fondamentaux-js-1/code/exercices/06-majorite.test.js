// Tests for 06-majorite.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

// Runs the exercise file with the given arguments and returns what it prints.
const file = path.join(process.env.EXERCISES_DIR ?? import.meta.dirname, '06-majorite.js');
// A 5-second timeout turns an infinite loop into a failing test instead of a frozen terminal.
const run = (...args) =>
  execFileSync(process.execPath, [file, ...args], { encoding: 'utf8', timeout: 5000 }).trim();

test('18 ans : majeur', () => {
  assert.equal(run('18'), 'majeur');
});

test('17 ans : mineur', () => {
  assert.equal(run('17'), 'mineur');
});

test('42 ans : majeur', () => {
  assert.equal(run('42'), 'majeur');
});

test('0 an : mineur', () => {
  assert.equal(run('0'), 'mineur');
});

test('texte : âge invalide', () => {
  assert.equal(run('abc'), 'âge invalide');
});

test('âge négatif : âge invalide', () => {
  assert.equal(run('-3'), 'âge invalide');
});
