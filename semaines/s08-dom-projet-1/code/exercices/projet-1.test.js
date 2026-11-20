// Tests for project #1 — run them with: node --test projet-1.test.js
// Only the logic (logic.js) is tested; the display (app.js) is checked in the browser.
// This file works in two places: in the week folder (next to projet-1/) and at the root of your project.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Finds the folder of logic.js: projet-1/ in the week folder, or this folder in your project.
function projectFolder(base) {
  const inWeek = path.join(base, 'projet-1');
  return fs.existsSync(path.join(inWeek, 'logic.js')) ? inWeek : base;
}

const logicDir = projectFolder(process.env.EXERCISES_DIR || import.meta.dirname);
const dataDir = projectFolder(import.meta.dirname);
const { museumLabel, searchMuseums, findMuseum } = await import(pathToFileURL(path.join(logicDir, 'logic.js')).href);
const { MUSEUMS } = await import(pathToFileURL(path.join(dataDir, 'data', 'musees-bretagne.js')).href);

test('museumLabel : le nom, un tiret, la ville', () => {
  const dinan = { Identifiant: 'M0194', Nom_officiel: 'musée de Dinan', Ville: 'Dinan' };
  assert.equal(museumLabel(dinan), 'musée de Dinan - Dinan');
});

test('searchMuseums : une recherche vide renvoie une copie de tous les musées', () => {
  const all = searchMuseums(MUSEUMS, '   ');
  assert.equal(all.length, 34);
  assert.notEqual(all, MUSEUMS, 'un nouveau tableau, pas le tableau reçu');
});

test('searchMuseums : par la ville, sans tenir compte des majuscules ni des espaces', () => {
  const found = searchMuseums(MUSEUMS, '  QUIMPER ');
  assert.deepEqual(found.map((museum) => museum.Identifiant), ['M0207', 'M0208']);
});

test('searchMuseums : par le nom, sans modifier le tableau reçu', () => {
  const copy = [...MUSEUMS];
  const found = searchMuseums(MUSEUMS, 'écomusée');
  assert.equal(found.length, 7);
  assert.deepEqual(MUSEUMS, copy);
});

test('findMuseum : le musée de cet identifiant, ou undefined', () => {
  assert.equal(findMuseum(MUSEUMS, 'M0199').Nom_officiel, 'musée de la pêche');
  assert.equal(findMuseum(MUSEUMS, 'M9999'), undefined);
});
