// Tests for o2-valeurs-par-defaut.js (palier 3) — run them with: node --test o2-valeurs-par-defaut.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { withDefaults } = await import(pathToFileURL(path.join(dir, 'o2-valeurs-par-defaut.js')).href);

test("ville absente : 'inconnue'", () => {
  assert.deepEqual(withDefaults({ name: 'musée X', total: 10 }), { name: 'musée X', city: 'inconnue', total: 10 });
});

test("total null : 0", () => {
  assert.deepEqual(withDefaults({ name: 'musée X', city: 'METZ', total: null }), { name: 'musée X', city: 'METZ', total: 0 });
});

test("un vrai 0 et un texte vide sont gardés", () => {
  assert.deepEqual(withDefaults({ name: 'musée X', city: '', total: 0 }), { name: 'musée X', city: '', total: 0 });
});

test("l'objet reçu n'est pas modifié", () => {
  const museum = { name: 'musée X', total: null };
  withDefaults(museum);
  assert.deepEqual(museum, { name: 'musée X', total: null });
});
