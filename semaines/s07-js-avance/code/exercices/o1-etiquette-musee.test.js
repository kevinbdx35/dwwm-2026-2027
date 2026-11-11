// Tests for o1-etiquette-musee.js — run them with: node --test o1-etiquette-musee.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { museumLabel } = await import(pathToFileURL(path.join(dir, 'o1-etiquette-musee.js')).href);

test("Unterlinden", () => {
  const museum = { name: 'musée Unterlinden', city: 'COLMAR', total: 165484 };
  assert.equal(museumLabel(museum), 'musée Unterlinden (COLMAR)');
});

test("un autre musée", () => {
  const museum = { name: "musée de l'Ardenne", city: 'CHARLEVILLE MEZIERES', total: 51775 };
  assert.equal(museumLabel(museum), "musée de l'Ardenne (CHARLEVILLE MEZIERES)");
});
