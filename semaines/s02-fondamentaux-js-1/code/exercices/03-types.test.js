// Tests for 03-types.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

// Runs the exercise file with the given arguments and returns what it prints.
const file = path.join(process.env.EXERCISES_DIR ?? import.meta.dirname, '03-types.js');
// A 5-second timeout turns an infinite loop into a failing test instead of a frozen terminal.
const run = (...args) =>
  execFileSync(process.execPath, [file, ...args], { encoding: 'utf8', timeout: 5000 }).trim();

test('avec 42', () => {
  assert.equal(run('42'), 'texte : string\nnombre : number\ntexte + texte : 4242\nnombre + nombre : 84');
});

test('avec 5', () => {
  assert.equal(run('5'), 'texte : string\nnombre : number\ntexte + texte : 55\nnombre + nombre : 10');
});
