// Tests for 02-presentation.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

// Runs the exercise file with the given arguments and returns what it prints.
const file = path.join(process.env.EXERCISES_DIR ?? import.meta.dirname, '02-presentation.js');
// A 5-second timeout turns an infinite loop into a failing test instead of a frozen terminal.
const run = (...args) =>
  execFileSync(process.execPath, [file, ...args], { encoding: 'utf8', timeout: 5000 }).trim();

test('Ada, 36 ans', () => {
  assert.equal(run('Ada', '36'), "Bonjour Ada ! L'an prochain, vous aurez 37 ans.");
});

test('Linus, 54 ans', () => {
  assert.equal(run('Linus', '54'), "Bonjour Linus ! L'an prochain, vous aurez 55 ans.");
});

test("l'âge est additionné, pas collé", () => {
  assert.equal(run('Grace', '19'), "Bonjour Grace ! L'an prochain, vous aurez 20 ans.");
});
