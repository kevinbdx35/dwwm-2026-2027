// Tests for xss1c-villes/app.js — run them with: node --test xss1c-villes.test.js
// These tests read the code of app.js as a text: they check how the page is written.
// Check the result in the browser too.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Reads the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const code = fs.readFileSync(path.join(dir, 'xss1c-villes', 'app.js'), 'utf8');
// The code without its comments, so that a comment that names innerHTML is not counted.
const instructions = code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

test('app.js n’utilise plus innerHTML', () => {
  assert.equal(instructions.includes('innerHTML'), false);
});

test('app.js crée les <li> avec createElement et écrit la ville avec textContent', () => {
  assert.match(instructions, /createElement\(\s*['"`]li['"`]\s*\)/);
  assert.ok(instructions.includes('textContent'));
});
