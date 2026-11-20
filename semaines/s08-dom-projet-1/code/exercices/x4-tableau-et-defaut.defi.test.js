// Tests for x4-tableau-et-defaut.js — run them with: node --test x4-tableau-et-defaut.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { podium, website } = await import(pathToFileURL(path.join(dir, 'x4-tableau-et-defaut.js')).href);

test('podium : les deux premiers noms', () => {
  assert.equal(podium(['musée de Bretagne', 'musée bigouden', 'port musée']), '1. musée de Bretagne, 2. musée bigouden');
});

test('podium : un nom qui manque est remplacé par un tiret', () => {
  assert.equal(podium(['musée de Bretagne']), '1. musée de Bretagne, 2. -');
  assert.equal(podium([]), '1. -, 2. -');
});

test("website : l'adresse, ou « non renseigné »", () => {
  assert.equal(website({ URL: 'www.musee-peche.fr/' }), 'www.musee-peche.fr/');
  assert.equal(website({ Nom_officiel: 'musée' }), 'non renseigné');
});
