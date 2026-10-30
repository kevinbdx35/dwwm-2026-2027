// Tests for the layout of page-perso/style.css (Thursday, « Layout Lab ») — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const css = fs
  .readFileSync(path.join(dir, 'page-perso', 'style.css'), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '');

test('la mise en page utilise Flexbox ou Grid', () => {
  assert.match(css, /display\s*:\s*(flex|grid)/i);
});

test('mobile first : au moins une media query en min-width', () => {
  assert.match(css, /@media[^{]*min-width/i);
});

test('mobile first : pas de media query en max-width', () => {
  assert.doesNotMatch(css, /@media[^{]*max-width/i);
});
