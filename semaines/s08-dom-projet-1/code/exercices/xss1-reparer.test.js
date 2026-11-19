// Tests for xss1-reparer/app.js — run them with: node --test xss1-reparer.test.js
// These tests read the code of app.js as a text: they check how the page is written.
// Check the result in the browser too.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Reads the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const code = fs.readFileSync(path.join(dir, 'xss1-reparer', 'app.js'), 'utf8');
// The code without its comments, so that a comment that names innerHTML is not counted.
const instructions = code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

test('app.js n’utilise plus innerHTML', () => {
  assert.equal(instructions.includes('innerHTML'), false);
});

test('app.js écrit le texte avec textContent et crée les <li> avec createElement', () => {
  assert.ok(instructions.includes('textContent'));
  assert.match(instructions, /createElement\(\s*['"`]li['"`]\s*\)/);
});
