// Tests for s2-domaine/logic.js — run them with: node --test s2-domaine.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { withDomain } = await import(pathToFileURL(path.join(dir, 's2-domaine', 'logic.js')).href);
const { MUSEUMS } = await import(pathToFileURL(path.join(import.meta.dirname, 'data', 'musees-bretagne.js')).href);

test('withDomain : les 8 musées qui ont de la photographie', () => {
  assert.equal(withDomain(MUSEUMS, 'Photographie').length, 8);
});

test('withDomain : un domaine inconnu donne un tableau vide', () => {
  assert.deepEqual(withDomain(MUSEUMS, 'Astronomie'), []);
});

test('withDomain : le tableau reçu ne change pas', () => {
  const copy = [...MUSEUMS];
  withDomain(MUSEUMS, 'Histoire');
  assert.deepEqual(MUSEUMS, copy);
});
