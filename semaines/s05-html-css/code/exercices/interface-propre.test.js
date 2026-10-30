// Tests for interface-propre/style.css (Tuesday afternoon) — run them with: node --test interface-propre.test.js
// They check the five rules of a clean interface; your eyes check the result (before / after screenshots).
// A correct answer written differently passes: spaces, grouped selectors, several rules for the same element.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readExercise, cssRules, declarationsFor, valueOf, usesVar } from './css-html-helpers.js';

const rules = cssRules(readExercise('interface-propre', 'style.css'));
// The :root block holds the design choices; the rest of the file only uses them.
const isRoot = (rule) => rule.selectors.includes(':root');
const root = rules.filter(isRoot).flatMap((rule) => rule.declarations);
const rest = rules.filter((rule) => !isRoot(rule));
const values = (property) => rest.flatMap((rule) => rule.declarations).filter((d) => d.property === property);
const declared = (name) => root.some((d) => d.property === name);

// Running text: text-align: center is not allowed there (a button may center its label).
const TEXT_ELEMENTS = ['body', 'main', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'section', 'article', 'li'];
const elementOf = (selector) => selector.split(/[\s>+~]/).at(-1).match(/^[a-z][a-z0-9]*/)?.[0];

test('règle 1 : :root déclare les trois couleurs', () => {
  for (const name of ['--couleur-texte', '--couleur-fond', '--couleur-accent']) {
    assert.ok(declared(name), `${name} is missing from :root`);
  }
});

test('règle 2 : :root déclare une échelle d\'espacements (--espace-1 à --espace-5)', () => {
  for (let i = 1; i <= 5; i++) {
    assert.ok(declared(`--espace-${i}`), `--espace-${i} is missing from :root`);
  }
});

test('règle 3 : :root déclare les tailles de texte, et chaque font-size les utilise', () => {
  for (const name of ['--texte-petit', '--texte-normal', '--texte-titre']) {
    const value = root.find((d) => d.property === name)?.value ?? '';
    assert.match(value, /^[\d.]+rem$/i, `${name} is missing from :root (in rem)`);
  }
  for (const { value } of values('font-size')) {
    assert.match(value, /^var\(\s*--texte-[a-z0-9-]+\s*(,[^)]*)?\)$/, `font-size: ${value} is outside the scale`);
  }
});

test('règle 4 : le h1 utilise la plus grande taille, le bouton l\'accent', () => {
  assert.ok(usesVar(valueOf(declarationsFor(rest, 'h1'), 'font-size'), '--texte-titre'), 'h1: font-size: var(--texte-titre) is missing');
  const bouton = declarationsFor(rest, '.bouton');
  const background = valueOf(bouton, 'background-color') ?? valueOf(bouton, 'background');
  assert.ok(usesVar(background, '--couleur-accent'), '.bouton: background var(--couleur-accent) is missing');
  // A state of the same element (.bouton:hover) is not another element.
  const accented = new Set(
    rest
      .filter((rule) => rule.declarations.some((d) => /^background(-color)?$/.test(d.property) && usesVar(d.value, '--couleur-accent')))
      .flatMap((rule) => rule.selectors.map((s) => s.replace(/::?[a-z-]+(\([^)]*\))?/g, ''))),
  );
  assert.equal(accented.size, 1, 'exactly one element must have the accent background');
});

test('règle 5 : une colonne de 45ch à 75ch, texte courant aligné à gauche', () => {
  const widths = values('max-width').flatMap(({ value }) => [...value.matchAll(/(\d+(?:\.\d+)?)ch\b/g)].map((m) => Number(m[1])));
  assert.ok(widths.length > 0, 'max-width in ch is missing');
  assert.ok(widths.every((n) => n >= 45 && n <= 75), 'max-width is outside 45ch–75ch');
  for (const rule of rest) {
    if (!/^center$/i.test(valueOf(rule.declarations, 'text-align') ?? '')) continue;
    const text = rule.selectors.filter((s) => TEXT_ELEMENTS.includes(elementOf(s)));
    assert.deepEqual(text, [], `text-align: center on running text: ${text.join(', ')}`);
  }
});
