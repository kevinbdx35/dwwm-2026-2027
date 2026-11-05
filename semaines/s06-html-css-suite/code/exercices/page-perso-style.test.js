// Tests for the variables of page-perso/style.css (Tuesday, « CSS from scratch ») — run them with: node --test page-perso-style.test.js
// The five rules of a clean interface, on your own page: the choices live in :root, the rest uses them.
// Names expected: --couleur-… for the colors, --espace-… for the spacing (e.g. --couleur-texte, --espace-1).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readExercise, cssRules } from './css-html-helpers.js';

const rules = cssRules(readExercise('page-perso', 'style.css'));
// Every :root block counts as :root, including one inside @media (prefers-color-scheme: dark).
const isRoot = (rule) => rule.selectors.includes(':root');
const root = rules.filter(isRoot).flatMap((rule) => rule.declarations);
const restValues = rules.filter((rule) => !isRoot(rule)).flatMap((rule) => rule.declarations.map((d) => d.value));
const names = (prefix) => new Set(root.map((d) => d.property).filter((p) => p.startsWith(prefix)));

test('palette : au moins deux couleurs --couleur-… dans :root', () => {
  assert.ok(names('--couleur-').size >= 2, 'fewer than two --couleur-… variables');
});

test('espacements : au moins trois pas --espace-… dans :root', () => {
  assert.ok(names('--espace-').size >= 3, 'fewer than three --espace-… variables');
});

test('les couleurs viennent de :root : var(--couleur-…) utilisée, aucune couleur écrite à la main', () => {
  assert.ok(restValues.some((v) => /var\(\s*--couleur-/.test(v)), 'no var(--couleur-…) outside :root');
  const hardCoded = restValues.flatMap((v) => v.match(/#[0-9a-f]{3,8}\b|\b(?:rgba?|hsla?)\(|\b(?:white|black)\b/gi) ?? []);
  assert.deepEqual(hardCoded, [], `hard-coded colors: ${hardCoded.join(', ')}`);
});
