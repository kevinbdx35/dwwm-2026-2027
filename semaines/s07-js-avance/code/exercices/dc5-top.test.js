// Tests for dc5-top.js — run them with: node --test dc5-top.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { topMuseums } = await import(pathToFileURL(path.join(dir, 'dc5-top.js')).href);

test("top 2", () => {
  const museums = [{ name: 'A', total: 5 }, { name: 'B', total: 9 }, { name: 'C', total: 7 }];
  assert.deepEqual(topMuseums(museums, 2), [{ name: 'B', total: 9 }, { name: 'C', total: 7 }]);
});

test("des nombres, pas des textes : 100 avant 9", () => {
  const museums = [{ name: 'A', total: 9 }, { name: 'B', total: 100 }];
  assert.deepEqual(topMuseums(museums, 1), [{ name: 'B', total: 100 }]);
});

test("le tableau reçu n'est pas modifié", () => {
  const museums = [{ total: 1 }, { total: 3 }];
  topMuseums(museums, 1);
  assert.deepEqual(museums, [{ total: 1 }, { total: 3 }]);
});

const { readFileSync } = await import('node:fs');
// The museums already cleaned (114 museums, data/LISEZMOI.md) always live next to this test file.
const museums = JSON.parse(readFileSync(path.join(import.meta.dirname, 'data', 'musees-grand-est-2019-propres.json'), 'utf8'));

test("le vrai fichier : le plus visité est l'écomusée d'Alsace", () => {
  const [first] = topMuseums(museums, 1);
  assert.equal(first.name, "écomusée d'Alsace");
  assert.equal(first.total, 179932);
});
