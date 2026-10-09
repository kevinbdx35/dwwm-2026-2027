// Tests for 08-compte-a-rebours.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

// Runs the exercise file with the given arguments and returns what it prints.
const file = path.join(process.env.EXERCISES_DIR ?? import.meta.dirname, '08-compte-a-rebours.js');
// A 5-second timeout turns an infinite loop into a failing test instead of a frozen terminal.
const run = (...args) =>
  execFileSync(process.execPath, [file, ...args], { encoding: 'utf8', timeout: 5000 }).trim();

test('à partir de 3', () => {
  assert.equal(run('3'), '3\n2\n1\nDécollage !');
});

test('à partir de 1', () => {
  assert.equal(run('1'), '1\nDécollage !');
});

test('à partir de 0', () => {
  assert.equal(run('0'), 'Décollage !');
});

test('texte : nombre invalide', () => {
  assert.equal(run('abc'), 'nombre invalide');
});

test('nombre négatif : nombre invalide', () => {
  assert.equal(run('-2'), 'nombre invalide');
});

test('utilise une boucle for (étape 2)', () => {
  // Comments are removed first, so the word "for" in a comment does not count.
  const code = fs
    .readFileSync(file, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '');
  assert.match(code, /\bfor\s*\(/);
});
