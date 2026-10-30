// Tests for the variables of page-perso/style.css (Tuesday, « CSS from scratch ») — run them with: node --test
// The five rules of a clean interface, on your own page: the choices live in :root, the rest uses them.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const css = fs
  .readFileSync(path.join(dir, 'page-perso', 'style.css'), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '');

const rootMatch = css.match(/:root\s*\{([^}]*)\}/);
const root = rootMatch ? rootMatch[1] : '';
const rest = rootMatch ? css.replace(rootMatch[0], '') : css;

test('palette : au moins deux couleurs --couleur-… dans :root', () => {
  assert.ok((root.match(/--couleur-[a-z-]+\s*:/g) ?? []).length >= 2, 'moins de deux variables --couleur-…');
});

test('espacements : au moins trois pas --espace-… dans :root', () => {
  assert.ok((root.match(/--espace-\d\s*:/g) ?? []).length >= 3, 'moins de trois variables --espace-…');
});

test('aucune couleur écrite à la main hors de :root', () => {
  const hardCoded = rest.match(/#[0-9a-f]{3,8}\b|\b(rgb|rgba|hsl|hsla)\(|:\s*(white|black)\b/gi) ?? [];
  assert.deepEqual(hardCoded, [], `couleurs en dur : ${hardCoded.join(', ')}`);
});
