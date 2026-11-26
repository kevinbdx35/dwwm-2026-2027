// Tests for t1c-message-efface/logic.js — run them with: node --test t1c-message-efface.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { confirmationMessage } = await import(pathToFileURL(path.join(dir, 't1c-message-efface', 'logic.js')).href);

test('confirmationMessage : le nom, puis « ajouté aux favoris »', () => {
  const museum = { Nom_officiel: 'musée de Dinan', Ville: 'Dinan' };
  assert.equal(confirmationMessage(museum), 'musée de Dinan ajouté aux favoris');
});

test('confirmationMessage : un autre musée', () => {
  const museum = { Nom_officiel: 'musée de la pêche', Ville: 'Concarneau' };
  assert.equal(confirmationMessage(museum), 'musée de la pêche ajouté aux favoris');
});
