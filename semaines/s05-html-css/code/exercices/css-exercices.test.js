// Tests for css-exercices/style.css — run them with: node --test css-exercices.test.js
// They check that the expected rules are written; Live Preview shows whether they work.
// A correct answer written differently passes: spaces, case, order, shorthands, equivalent colors.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readExercise, cssRules, declarationsFor, valueOf, boxSide, colorsIn } from './css-html-helpers.js';

const rules = cssRules(readExercise('css-exercices', 'style.css'));
const of = (selector) => declarationsFor(rules, selector);

test('exercice 1a : h1 en #1f2a5a', () => {
  assert.ok(colorsIn(valueOf(of('h1'), 'color') ?? '').includes('31,42,90'), 'h1: color #1f2a5a is missing');
});

test('exercice 1b : .important en gras', () => {
  assert.match(valueOf(of('.important'), 'font-weight') ?? '', /^(bold|700)$/i);
});

test('exercice 1c : #intro en italique', () => {
  assert.match(valueOf(of('#intro'), 'font-style') ?? '', /^italic$/i);
});

test('exercice 1d : liens de nav sans soulignement', () => {
  const decls = of('nav a');
  const decoration = valueOf(decls, 'text-decoration') ?? valueOf(decls, 'text-decoration-line') ?? '';
  assert.match(decoration, /\bnone\b/i);
});

test('exercice 2 : .bouton avec fond #b3122e', () => {
  const decls = of('.bouton');
  const background = valueOf(decls, 'background-color') ?? valueOf(decls, 'background') ?? '';
  assert.ok(colorsIn(background).includes('179,18,46'), '.bouton: background #b3122e is missing');
});

test('exercice 3a : box-sizing: border-box', () => {
  assert.ok(rules.some((rule) => /^border-box$/i.test(valueOf(rule.declarations, 'box-sizing') ?? '')));
});

test('exercice 3b : .carte avec padding, border et margin-bottom', () => {
  const carte = of('.carte');
  for (const side of ['top', 'right', 'bottom', 'left']) {
    assert.equal(boxSide(carte, 'padding', side), '1rem', `.carte: padding-${side} is not 1rem`);
  }
  const border = (valueOf(carte, 'border') ?? '').toLowerCase().split(/\s+/);
  const longhands = [valueOf(carte, 'border-width'), valueOf(carte, 'border-style')].map((v) => (v ?? '').toLowerCase());
  const ok = (border.includes('2px') && border.includes('solid')) || (longhands[0] === '2px' && longhands[1] === 'solid');
  assert.ok(ok, '.carte: 2px solid border is missing');
  assert.equal(boxSide(carte, 'margin', 'bottom'), '1.5rem', '.carte: margin-bottom is not 1.5rem');
});

test('exercice 4 : .conteneur à 90 %, 60rem au maximum, centré', () => {
  const conteneur = of('.conteneur');
  assert.equal(valueOf(conteneur, 'width'), '90%');
  assert.equal((valueOf(conteneur, 'max-width') ?? '').toLowerCase(), '60rem');
  assert.equal(boxSide(conteneur, 'margin', 'left'), 'auto', '.conteneur: margin-left is not auto');
  assert.equal(boxSide(conteneur, 'margin', 'right'), 'auto', '.conteneur: margin-right is not auto');
});
