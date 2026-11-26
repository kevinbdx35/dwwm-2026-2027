// Tests for a2-reecrire-then/logic.js — run them with: node --test a2-reecrire-then.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { museumLabel, twoCities } = await import(pathToFileURL(path.join(dir, 'a2-reecrire-then', 'logic.js')).href);

// The code of a file of the exercise, without its comments.
function codeOf(file) {
  const text = fs.readFileSync(path.join(dir, 'a2-reecrire-then', file), 'utf8');
  return text.replace(/\/\/.*$/gm, '');
}

test('museumLabel : le nom, un tiret, la ville', async () => {
  assert.equal(await museumLabel('M0194'), 'musée de Dinan - Dinan');
});

test('twoCities : les deux villes', async () => {
  assert.equal(await twoCities('M0199', 'M0207'), 'Concarneau et Quimper');
});

test('logic.js : plus de then, et await dans les deux fonctions', () => {
  const code = codeOf('logic.js');
  assert.doesNotMatch(code, /\.then\s*\(/, 'logic.js still calls then');
  assert.ok((code.match(/\bawait\b/g) || []).length >= 3, 'fewer than three await in logic.js');
});

test('app.js : plus de then, et une fonction async', () => {
  const code = codeOf('app.js');
  assert.doesNotMatch(code, /\.then\s*\(/, 'app.js still calls then');
  assert.match(code, /\basync\b/, 'no async function in app.js');
});
