// Tests for 10-fizzbuzz.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

// Runs the exercise file with the given arguments and returns what it prints.
const file = path.join(process.env.EXERCISES_DIR ?? import.meta.dirname, '10-fizzbuzz.js');
// A 5-second timeout turns an infinite loop into a failing test instead of a frozen terminal.
const run = (...args) =>
  execFileSync(process.execPath, [file, ...args], { encoding: 'utf8', timeout: 5000 }).trim();

test('de 1 à 15', () => {
  assert.equal(run('15'), '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz');
});

test('de 1 à 1', () => {
  assert.equal(run('1'), '1');
});

test('0 : nombre invalide', () => {
  assert.equal(run('0'), 'nombre invalide');
});
