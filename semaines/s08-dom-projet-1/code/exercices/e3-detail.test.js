// Tests for e3-detail/logic.js — run them with: node --test e3-detail.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { findMuseum } = await import(pathToFileURL(path.join(dir, 'e3-detail', 'logic.js')).href);
const { MUSEUMS } = await import(pathToFileURL(path.join(import.meta.dirname, 'data', 'musees-bretagne.js')).href);

test("findMuseum : le musée de l'identifiant M0224", () => {
  assert.equal(findMuseum(MUSEUMS, 'M0224').Nom_officiel, 'musée de la Compagnie des Indes');
});

test('findMuseum : un identifiant inconnu donne undefined', () => {
  assert.equal(findMuseum(MUSEUMS, 'M9999'), undefined);
});
