// Helpers shared by the HTML and CSS tests of weeks 5 and 6 (no dependency).
// They read your code the way a browser does, so that a correct answer written differently passes:
// spaces, upper or lower case, single or double quotes, order of rules and attributes, shorthands,
// equivalent colors (#fff, #ffffff, white, rgb(255, 255, 255)).
import fs from 'node:fs';
import path from 'node:path';

const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;

// Reads a file of the exercises (or of the solutions, for the trainer).
export function readExercise(...parts) {
  return fs.readFileSync(path.join(dir, ...parts), 'utf8');
}

// ---------------------------------------------------------------- CSS

// Every rule of a stylesheet, in order, rules inside @media included:
// { selectors: ['h1', 'nav a'], declarations: [{ property: 'color', value: '#1f2a5a' }] }.
export function cssRules(css) {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const rules = [];
  for (const match of clean.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const prelude = match[1].trim();
    if (prelude.startsWith('@')) continue;
    rules.push({
      selectors: prelude.split(',').map(normalizeSelector),
      declarations: parseDeclarations(match[2]),
    });
  }
  return rules;
}

// The @media conditions of a stylesheet, e.g. ['(min-width: 48rem)'].
export function mediaQueries(css) {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, '');
  return [...clean.matchAll(/@media([^{]*)\{/gi)].map((m) => m[1].trim().toLowerCase());
}

function parseDeclarations(body) {
  return body
    .split(';')
    .map((part) => part.trim())
    .filter((part) => part.includes(':'))
    .map((part) => {
      const index = part.indexOf(':');
      return {
        property: part.slice(0, index).trim().toLowerCase(),
        value: part.slice(index + 1).replace(/!important/i, '').trim(),
      };
    });
}

// Lower case, one space between parts, no space around > + ~.
function normalizeSelector(selector) {
  return selector.trim().toLowerCase().replace(/\s+/g, ' ').replace(/\s*([>+~])\s*/g, '$1');
}

// True if the selector targets exactly the element written in target:
// 'h1' accepts 'h1'; '.important' accepts '.important' and 'p.important'; 'nav a' accepts 'nav a'.
// A state (:hover) or a descendant ('header h1') is another target.
export function selects(selector, target) {
  const wanted = normalizeSelector(target);
  if (selector === wanted) return true;
  if (!/^[.#]/.test(wanted)) return false;
  return selector.endsWith(wanted) && /^[a-z][a-z0-9]*$/.test(selector.slice(0, -wanted.length));
}

// The declarations of every rule that targets the selector, in the order of the file (the last one wins).
export function declarationsFor(rules, target) {
  return rules.filter((rule) => rule.selectors.some((s) => selects(s, target))).flatMap((rule) => rule.declarations);
}

// The final value of a property (the last declaration wins), or undefined.
export function valueOf(declarations, property) {
  return declarations.filter((d) => d.property === property).at(-1)?.value;
}

// The final value of one side of margin or padding, shorthands included:
// margin: 0 0 1.5rem, margin-bottom, margin-inline, margin-block. Zero is written '0'.
export function boxSide(declarations, property, side) {
  const sides = ['top', 'right', 'bottom', 'left'];
  let result;
  for (const { property: p, value } of declarations) {
    const parts = value.split(/\s+/).map(zero);
    if (p === property) {
      const [top, right = top, bottom = top, left = right] = parts;
      result = { top, right, bottom, left }[side];
    } else if (p === `${property}-${side}`) {
      result = parts[0];
    } else if (p === `${property}-inline` && (side === 'left' || side === 'right')) {
      result = side === 'left' ? parts[0] : (parts[1] ?? parts[0]);
    } else if (p === `${property}-block` && (side === 'top' || side === 'bottom')) {
      result = side === 'top' ? parts[0] : (parts[1] ?? parts[0]);
    }
  }
  return sides.includes(side) ? result : undefined;
}

function zero(value) {
  return /^0(\.0+)?[a-z%]*$/i.test(value) ? '0' : value.toLowerCase();
}

// The colors written in a value, as 'r,g,b' strings: hex (3 or 6 digits), rgb(), white and black.
export function colorsIn(value) {
  const colors = [];
  for (const m of value.matchAll(/#([0-9a-f]{6}|[0-9a-f]{3})\b|rgba?\(([^)]*)\)|\b(white|black)\b/gi)) {
    if (m[1]) {
      const hex = m[1].length === 3 ? [...m[1]].map((c) => c + c).join('') : m[1];
      colors.push([0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(','));
    } else if (m[2]) {
      colors.push(m[2].split(/[\s,/]+/).filter(Boolean).slice(0, 3).map(Number).join(','));
    } else {
      colors.push(m[3].toLowerCase() === 'white' ? '255,255,255' : '0,0,0');
    }
  }
  return colors;
}

// True if the value uses the custom property, e.g. usesVar('var( --texte-titre )', '--texte-titre').
export function usesVar(value = '', name) {
  return new RegExp(`var\\(\\s*${name}\\s*[,)]`).test(value);
}

// ---------------------------------------------------------------- HTML

// Removes the comments, so that a tag written in a comment does not count.
export function stripHtmlComments(html) {
  return html.replace(/<!--[\s\S]*?-->/g, '');
}

// Every tag with the given name, as a map of its attributes (names in lower case):
// <input type='text' id=nom required> gives { type: 'text', id: 'nom', required: '' }.
export function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b([^>]*)>`, 'gi'))].map((m) => {
    const attributes = {};
    for (const a of m[1].matchAll(/([^\s=/>"']+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g)) {
      attributes[a[1].toLowerCase()] = a[2] ?? a[3] ?? a[4] ?? '';
    }
    return attributes;
  });
}
