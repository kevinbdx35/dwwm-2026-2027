// Défi tests for interface-propre/style.css (Tuesday afternoon): the five rules, applied strictly.
// Run them only if you want: node --test interface-propre.defi.test.js
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

test('défi, règle 1 : aucune couleur écrite à la main hors de :root', () => {
  const hardCoded = rest.match(/#[0-9a-f]{3,8}\b|\b(rgb|rgba|hsl|hsla)\(|:\s*(white|black)\b/gi) ?? [];
  assert.deepEqual(hardCoded, [], `hard-coded colors: ${hardCoded.join(', ')}`);
});

test('défi, règle 2 : margin, padding et gap n\'utilisent que l\'échelle, 0 ou auto', () => {
  const spacing = values('margin(?:-[a-z]+)?|padding(?:-[a-z]+)?|gap');
  assert.ok(spacing.length > 0, 'no spacing found');
  for (const { property, value } of spacing) {
    const parts = value.replace(/var\(--espace-\d\)/g, 'OK').split(/\s+/);
    for (const part of parts) {
      assert.ok(['OK', '0', 'auto'].includes(part), `${property}: ${value} is outside the scale`);
    }
  }
});

test('défi, règle 3 : interligne du body entre 1.4 et 1.8', () => {
  const match = rule('body').match(/line-height\s*:\s*([\d.]+)\s*(;|$)/);
  assert.ok(match, 'line-height (unitless) is missing from body');
  const lineHeight = Number(match[1]);
  assert.ok(lineHeight >= 1.4 && lineHeight <= 1.8, `line-height: ${lineHeight}`);
});
