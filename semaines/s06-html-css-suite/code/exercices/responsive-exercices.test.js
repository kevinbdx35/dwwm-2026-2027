// Tests for responsive-exercices/style.css — run them with: node --test responsive-exercices.test.js
// Base styles for the phone first, then a min-width media query (or the range syntax).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readExercise, cssRules, declarationsFor, valueOf, mediaQueries } from './css-html-helpers.js';

const css = readExercise('responsive-exercices', 'style.css').replace(/\/\*[\s\S]*?\*\//g, '');
// The stylesheet without its @media blocks: the base styles, for the phone.
const base = cssRules(css.replace(/@media[^{]*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/g, ''));
// Every rule, @media included: the last rule for a selector is the large-screen one.
const all = cssRules(css);
const norm = (text) => (text ?? '').toLowerCase().replace(/\s+/g, ' ').trim();
const inBase = (selector, property) => norm(valueOf(declarationsFor(base, selector), property));
const anywhere = (selector, property) => all.filter((rule) => rule.selectors.includes(selector)).flatMap((rule) => rule.declarations).filter((d) => d.property === property).map((d) => norm(d.value));

test('mobile first : une media query en min-width, aucune en max-width', () => {
  const media = mediaQueries(css);
  assert.ok(media.some((q) => /min-width|width\s*>|<=?\s*width/.test(q)), 'no min-width media query');
  assert.ok(!media.some((q) => /max-width|width\s*<|>=?\s*width/.test(q)), 'max-width media query');
});

test('exercice 1 : .galerie, une colonne de base, trois sur grand écran', () => {
  assert.equal(inBase('.galerie', 'display'), 'grid', '.galerie: display: grid is missing from the base styles');
  assert.equal(inBase('.galerie', 'grid-template-columns'), '1fr', '.galerie: one column is missing from the base styles');
  assert.ok(anywhere('.galerie', 'grid-template-columns').some((v) => /^(repeat\(\s*3\s*,\s*1fr\s*\)|1fr 1fr 1fr)$/.test(v)), '.galerie: three columns are missing');
});

test('exercice 2 : .menu, en colonne de base, en ligne sur grand écran', () => {
  assert.equal(inBase('.menu', 'display'), 'flex', '.menu: display: flex is missing from the base styles');
  assert.equal(inBase('.menu', 'flex-direction'), 'column', '.menu: flex-direction: column is missing from the base styles');
  assert.ok(anywhere('.menu', 'flex-direction').includes('row'), '.menu: flex-direction: row is missing');
});
