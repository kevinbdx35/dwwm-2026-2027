// Tests for xss2-livre-or — run them with: node --test xss2-livre-or.test.js
// These tests read index.html and app.js as texts: they check how the page is written.
// Check the result in the browser too.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Reads the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const code = fs.readFileSync(path.join(dir, 'xss2-livre-or', 'app.js'), 'utf8');
const page = fs.readFileSync(path.join(dir, 'xss2-livre-or', 'index.html'), 'utf8');
// The code without its comments, so that a comment that names innerHTML is not counted.
const instructions = code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
// The page without its comments.
const markup = page.replace(/<!--[\s\S]*?-->/g, '');

test('index.html contient le formulaire et ses deux champs', () => {
  assert.match(markup, /<form[^>]*id="formulaire"/);
  assert.match(markup, /<input[^>]*id="auteur"/);
  assert.match(markup, /<input[^>]*id="texte"/);
});

test('app.js n’utilise pas innerHTML', () => {
  assert.equal(instructions.includes('innerHTML'), false);
});

test('app.js crée le <li> et le <strong>, et écrit le prénom avec textContent', () => {
  assert.match(instructions, /createElement\(\s*['"`]li['"`]\s*\)/);
  assert.match(instructions, /createElement\(\s*['"`]strong['"`]\s*\)/);
  assert.ok(instructions.includes('textContent'));
});
