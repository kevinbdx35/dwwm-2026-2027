// Tests for css-exercices/style.css — run them with: node --test css-exercices.test.js
// They check that the expected rules are written; Live Preview shows whether they work.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const css = fs
  .readFileSync(path.join(dir, 'css-exercices', 'style.css'), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '');

// Returns the declarations of the first rule whose selector matches, or '' if none.
function rule(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\#]/g, '\\$&');
  const match = css.match(new RegExp(`(^|[},\\s])${escaped}\\s*\\{([^}]*)\\}`, 'm'));
  return match ? match[2] : '';
}

test('exercice 1a : h1 en #1f2a5a', () => {
  assert.match(rule('h1'), /color\s*:\s*#1f2a5a/i);
});

test('exercice 1b : .important en gras', () => {
  assert.match(rule('.important'), /font-weight\s*:\s*(bold|700)/i);
});

test('exercice 1c : #intro en italique', () => {
  assert.match(rule('#intro'), /font-style\s*:\s*italic/i);
});

test('exercice 1d : liens de nav sans soulignement', () => {
  assert.match(rule('nav a'), /text-decoration\s*:\s*none/i);
});

test('exercice 2 : .bouton avec fond #b3122e', () => {
  assert.match(rule('.bouton'), /background(-color)?\s*:\s*#b3122e/i);
});

test('exercice 3a : box-sizing: border-box', () => {
  assert.match(css, /box-sizing\s*:\s*border-box/i);
});

test('exercice 3b : .carte avec padding, border et margin-bottom', () => {
  const carte = rule('.carte');
  assert.match(carte, /padding\s*:\s*1rem/i);
  assert.match(carte, /border\s*:\s*2px\s+solid/i);
  assert.match(carte, /margin-bottom\s*:\s*1\.5rem/i);
});

test('exercice 4 : .conteneur à 90 %, 60rem au maximum, centré', () => {
  const conteneur = rule('.conteneur');
  assert.match(conteneur, /width\s*:\s*90%/i);
  assert.match(conteneur, /max-width\s*:\s*60rem/i);
  assert.match(conteneur, /margin\s*:\s*0\s+auto/i);
});
