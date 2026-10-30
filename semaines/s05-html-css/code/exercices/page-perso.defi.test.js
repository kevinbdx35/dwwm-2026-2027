// Défi tests for page-perso/index.html: the complete contact form (Monday afternoon).
// Run them only if you want: node --test page-perso.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const html = fs.readFileSync(path.join(dir, 'page-perso', 'index.html'), 'utf8');
// Comments are removed so that a tag written in a comment does not count.
const page = html.replace(/<!--[\s\S]*?-->/g, '');

test('défi : un champ d\'adresse e-mail (type="email")', () => {
  assert.match(page, /<input[^>]*type="email"/i);
});

test('défi : une zone de message (textarea)', () => {
  assert.match(page, /<textarea[\s>]/i);
});

test('défi : au moins un champ obligatoire (required)', () => {
  assert.match(page, /\srequired[\s>=/]/i);
});
