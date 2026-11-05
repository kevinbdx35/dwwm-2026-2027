// Tests for flex-exercices/style.css — run them with: node --test flex-exercices.test.js
// A correct answer written differently passes: spaces, case, order of rules.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readExercise, cssRules, declarationsFor, valueOf } from './css-html-helpers.js';

const rules = cssRules(readExercise('flex-exercices', 'style.css'));
const of = (selector) => declarationsFor(rules, selector);
const value = (selector, property) => (valueOf(of(selector), property) ?? '').toLowerCase();

test('exercice 1 : .menu en Flexbox, liens répartis', () => {
  assert.equal(value('.menu', 'display'), 'flex', '.menu: display: flex is missing');
  assert.equal(value('.menu', 'justify-content'), 'space-between', '.menu: justify-content: space-between is missing');
});

test('exercice 2 : .fiche en Flexbox, avec un espace, centrée en hauteur', () => {
  assert.equal(value('.fiche', 'display'), 'flex', '.fiche: display: flex is missing');
  assert.ok(value('.fiche', 'gap'), '.fiche: gap is missing');
  assert.equal(value('.fiche', 'align-items'), 'center', '.fiche: align-items: center is missing');
});

test('exercice 3 : .badges en ligne, à la ligne si besoin, sans puces', () => {
  assert.equal(value('.badges', 'display'), 'flex', '.badges: display: flex is missing');
  assert.equal(value('.badges', 'flex-wrap'), 'wrap', '.badges: flex-wrap: wrap is missing');
  assert.ok(value('.badges', 'gap'), '.badges: gap is missing');
  const style = value('.badges', 'list-style') || value('.badges', 'list-style-type');
  assert.match(style, /none/, '.badges: list-style: none is missing');
});
