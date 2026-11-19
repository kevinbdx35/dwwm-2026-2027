// Tests for xss1b-bienvenue/app.js — run them with: node --test xss1b-bienvenue.test.js
// These tests read the code of app.js as a text: they check how the page is written.
// Check the result in the browser too.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Reads the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const code = fs.readFileSync(path.join(dir, 'xss1b-bienvenue', 'app.js'), 'utf8');
// The code without its comments, so that a comment that names innerHTML is not counted.
const instructions = code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

test('app.js n’utilise plus innerHTML', () => {
  assert.equal(instructions.includes('innerHTML'), false);
});

test('app.js écrit le message avec textContent, sans balise dans le texte', () => {
  assert.match(instructions, /message\.textContent\s*=/);
  assert.equal(instructions.includes('<strong>'), false);
});
