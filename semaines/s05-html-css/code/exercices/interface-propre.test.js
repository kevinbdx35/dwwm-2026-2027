// Tests for interface-propre/style.css (Tuesday afternoon) — run them with: node --test interface-propre.test.js
// They check the five rules of a clean interface; your eyes check the result (before / after screenshots).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const css = fs
  .readFileSync(path.join(dir, 'interface-propre', 'style.css'), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '');

// The :root block holds the design choices; the rest of the file only uses them.
const rootMatch = css.match(/:root\s*\{([^}]*)\}/);
const root = rootMatch ? rootMatch[1] : '';
const rest = rootMatch ? css.replace(rootMatch[0], '') : css;

// Returns every value of the given properties, outside :root (e.g. all margin-* values).
function values(propertyPattern) {
  const regex = new RegExp(`(?:^|[;{\\s])(${propertyPattern})\\s*:\\s*([^;}]+)`, 'g');
  return [...rest.matchAll(regex)].map((m) => ({ property: m[1], value: m[2].trim() }));
}

// Returns the declarations of the first rule whose selector is exactly the given one.
function rule(selector) {
  const match = rest.match(new RegExp(`(^|[},\\s])${selector}\\s*\\{([^}]*)\\}`, 'm'));
  return match ? match[2] : '';
}

test('règle 1 : :root déclare les trois couleurs', () => {
  for (const name of ['--couleur-texte', '--couleur-fond', '--couleur-accent']) {
    assert.match(root, new RegExp(`${name}\\s*:`), `${name} absente de :root`);
  }
});

test('règle 2 : :root déclare une échelle d\'espacements (--espace-1 à --espace-5)', () => {
  for (let i = 1; i <= 5; i++) {
    assert.match(root, new RegExp(`--espace-${i}\\s*:`), `--espace-${i} absente de :root`);
  }
});

test('règle 3 : :root déclare les tailles de texte, et chaque font-size les utilise', () => {
  for (const name of ['--texte-petit', '--texte-normal', '--texte-titre']) {
    assert.match(root, new RegExp(`${name}\\s*:\\s*[\\d.]+rem`), `${name} absente de :root (en rem)`);
  }
  for (const { value } of values('font-size')) {
    assert.match(value, /^var\(--texte-[a-z-]+\)$/, `font-size: ${value} sort de l'échelle`);
  }
});

test('règle 4 : le h1 utilise la plus grande taille, le bouton l\'accent', () => {
  assert.match(rule('h1'), /font-size\s*:\s*var\(--texte-titre\)/);
  assert.match(rule('\\.bouton'), /background(-color)?\s*:\s*var\(--couleur-accent\)/);
  const accentBackgrounds = values('background(?:-color)?').filter(({ value }) => value.includes('--couleur-accent'));
  assert.equal(accentBackgrounds.length, 1, 'un seul élément a l\'accent en fond');
});

test('règle 5 : une colonne de 45ch à 75ch, texte aligné à gauche', () => {
  const widths = values('max-width').map(({ value }) => value.match(/^(\d+)ch$/)).filter(Boolean);
  assert.ok(widths.length > 0, 'max-width en ch absent');
  assert.ok(widths.every((m) => Number(m[1]) >= 45 && Number(m[1]) <= 75), 'max-width hors de 45ch – 75ch');
  assert.doesNotMatch(rest, /text-align\s*:\s*center/, 'text-align: center');
});
