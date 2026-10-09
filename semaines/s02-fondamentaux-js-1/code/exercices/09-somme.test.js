// Tests for 09-somme.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

// Runs the exercise file with the given arguments and returns what it prints.
const file = path.join(process.env.EXERCISES_DIR ?? import.meta.dirname, '09-somme.js');
// A 5-second timeout turns an infinite loop into a failing test instead of a frozen terminal.
const run = (...args) =>
  execFileSync(process.execPath, [file, ...args], { encoding: 'utf8', timeout: 5000 }).trim();

test('de 1 à 4', () => {
  assert.equal(run('4'), 'La somme de 1 à 4 vaut 10');
});

test('de 1 à 1', () => {
  assert.equal(run('1'), 'La somme de 1 à 1 vaut 1');
});

test('de 1 à 100', () => {
  assert.equal(run('100'), 'La somme de 1 à 100 vaut 5050');
});

test('0 : nombre invalide', () => {
  assert.equal(run('0'), 'nombre invalide');
});

test('texte : nombre invalide', () => {
  assert.equal(run('abc'), 'nombre invalide');
});
