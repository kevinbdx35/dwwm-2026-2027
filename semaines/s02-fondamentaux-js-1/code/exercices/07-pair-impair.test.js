// Tests for 07-pair-impair.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

// Runs the exercise file with the given arguments and returns what it prints.
const file = path.join(process.env.EXERCISES_DIR ?? import.meta.dirname, '07-pair-impair.js');
// A 5-second timeout turns an infinite loop into a failing test instead of a frozen terminal.
const run = (...args) =>
  execFileSync(process.execPath, [file, ...args], { encoding: 'utf8', timeout: 5000 }).trim();

test('12 est pair', () => {
  assert.equal(run('12'), '12 est pair');
});

test('7 est impair', () => {
  assert.equal(run('7'), '7 est impair');
});

test('0 est pair', () => {
  assert.equal(run('0'), '0 est pair');
});

test('-4 est pair', () => {
  assert.equal(run('-4'), '-4 est pair');
});

test('-3 est impair', () => {
  assert.equal(run('-3'), '-3 est impair');
});

test('texte : nombre invalide', () => {
  assert.equal(run('abc'), 'nombre invalide');
});
