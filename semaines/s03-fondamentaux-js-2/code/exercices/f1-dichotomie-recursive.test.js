// Tests for f1-dichotomie-recursive.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const file = path.join(dir, 'f1-dichotomie-recursive.js');
const { binarySearchRec } = await import(pathToFileURL(file).href);

const sorted = [1, 5, 10, 20, 50, 100, 500];

test('trouve 50 à l\'index 4', () => {
  assert.equal(binarySearchRec(sorted, 50), 4);
});

test('trouve le premier et le dernier', () => {
  assert.equal(binarySearchRec(sorted, 1), 0);
  assert.equal(binarySearchRec(sorted, 500), 6);
});

test('absente : -1', () => {
  assert.equal(binarySearchRec(sorted, 7), -1);
  assert.equal(binarySearchRec([], 7), -1);
});

test('récursive : sans boucle for ni while', () => {
  const code = fs.readFileSync(file, 'utf8').replace(/\/\/.*$/gm, '');
  assert.doesNotMatch(code, /\b(for|while)\s*\(/);
  assert.match(code, /binarySearchRec\s*\([^)]*\)[\s\S]*binarySearchRec\s*\(/);
});
