// Tests for grid-exercices/style.css — run them with: node --test grid-exercices.test.js
// A correct answer written differently passes: repeat(3, 1fr) or 1fr 1fr 1fr.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readExercise, cssRules, declarationsFor, valueOf } from './css-html-helpers.js';

const rules = cssRules(readExercise('grid-exercices', 'style.css'));
const of = (selector) => declarationsFor(rules, selector);
const value = (selector, property) => (valueOf(of(selector), property) ?? '').toLowerCase().replace(/\s+/g, ' ').trim();
const threeEqual = /^(repeat\(\s*3\s*,\s*1fr\s*\)|1fr 1fr 1fr)$/;
const twoEqual = /^(repeat\(\s*2\s*,\s*1fr\s*\)|1fr 1fr)$/;

test('exercice 1 : .galerie en Grid, trois colonnes égales, un espace', () => {
  assert.equal(value('.galerie', 'display'), 'grid', '.galerie: display: grid is missing');
  assert.match(value('.galerie', 'grid-template-columns'), threeEqual, '.galerie: three equal columns are missing');
  assert.ok(value('.galerie', 'gap'), '.galerie: gap is missing');
});

test('exercice 2 : .page en Grid, la seconde colonne deux fois plus large', () => {
  assert.equal(value('.page', 'display'), 'grid', '.page: display: grid is missing');
  assert.equal(value('.page', 'grid-template-columns'), '1fr 2fr', '.page: grid-template-columns: 1fr 2fr is missing');
});

test('exercice 3 : .tarifs en Grid, deux colonnes égales, un espace', () => {
  assert.equal(value('.tarifs', 'display'), 'grid', '.tarifs: display: grid is missing');
  assert.match(value('.tarifs', 'grid-template-columns'), twoEqual, '.tarifs: two equal columns are missing');
  assert.ok(value('.tarifs', 'gap'), '.tarifs: gap is missing');
});
