// Tests for j1b-musees-visites/logic.js — run them with: node --test j1b-musees-visites.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { addVisit, readVisits } = await import(pathToFileURL(path.join(dir, 'j1b-musees-visites', 'logic.js')).href);

test("addVisit : l'identifiant s'ajoute à la fin, sans doublon", () => {
  assert.deepEqual(addVisit(['M0216'], 'M0220'), ['M0216', 'M0220']);
  assert.deepEqual(addVisit(['M0216', 'M0220'], 'M0216'), ['M0216', 'M0220']);
});

test('addVisit : le tableau reçu ne change pas', () => {
  const visits = ['M0216'];
  addVisit(visits, 'M0220');
  assert.deepEqual(visits, ['M0216']);
});

test('readVisits : null donne [], un texte JSON redevient un tableau', () => {
  assert.deepEqual(readVisits(null), []);
  assert.deepEqual(readVisits('["M0216"]'), ['M0216']);
});
