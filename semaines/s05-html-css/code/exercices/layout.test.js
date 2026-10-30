// Tests for the layout of page-perso/style.css (Thursday, « Layout Lab ») — run them with: node --test layout.test.js
// A correct answer written differently passes: spaces, @media screen and (…), the range syntax (width >= 48rem).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readExercise, cssRules, mediaQueries } from './css-html-helpers.js';

const css = readExercise('page-perso', 'style.css');
const media = mediaQueries(css);
// (min-width: 48rem), (width >= 48rem) or (48rem <= width): from this width up.
const isMin = (query) => /min-width|width\s*>|<=?\s*width/.test(query);
// (max-width: 48rem), (width < 48rem) or (48rem > width): up to this width.
const isMax = (query) => /max-width|width\s*<|>=?\s*width/.test(query);

test('la mise en page utilise Flexbox ou Grid', () => {
  const display = cssRules(css).flatMap((rule) => rule.declarations).filter((d) => d.property === 'display');
  assert.ok(display.some((d) => /^(inline-)?(flex|grid)$/i.test(d.value)), 'display: flex or grid is missing');
});

test('mobile first : une media query en min-width, aucune en max-width', () => {
  assert.ok(media.some(isMin), 'no min-width media query');
  const max = media.filter(isMax);
  assert.deepEqual(max, [], `max-width media query: ${max.join(' ; ')}`);
});
