// Tests for e2-filtre-bouton/logic.js — run them with: node --test e2-filtre-bouton.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { inDepartment } = await import(pathToFileURL(path.join(dir, 'e2-filtre-bouton', 'logic.js')).href);
const { MUSEUMS } = await import(pathToFileURL(path.join(import.meta.dirname, 'data', 'musees-bretagne.js')).href);

test('inDepartment : les 13 musées du Finistère', () => {
  const found = inDepartment(MUSEUMS, 'Finistère');
  assert.equal(found.length, 13);
  assert.ok(found.every((museum) => museum.Departement === 'Finistère'));
});

test('inDepartment : le bouton « Tous » donne une copie des 34 musées', () => {
  const all = inDepartment(MUSEUMS, '');
  assert.equal(all.length, 34);
  assert.notEqual(all, MUSEUMS, 'un nouveau tableau, pas le tableau reçu');
});

test('inDepartment : un département inconnu donne un tableau vide', () => {
  assert.deepEqual(inDepartment(MUSEUMS, 'Calvados'), []);
});
