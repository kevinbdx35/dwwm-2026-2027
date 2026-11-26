// Tests for g2-await-oublie/logic.js — run them with: node --test g2-await-oublie.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { museumLabelOrMessage } = await import(pathToFileURL(path.join(dir, 'g2-await-oublie', 'logic.js')).href);

test('museumLabelOrMessage : un identifiant connu donne « nom - ville »', async () => {
  assert.equal(await museumLabelOrMessage('M0194'), 'musée de Dinan - Dinan');
});

test('museumLabelOrMessage : un autre identifiant connu', async () => {
  assert.equal(await museumLabelOrMessage('M0199'), 'musée de la pêche - Concarneau');
});

test('museumLabelOrMessage : un identifiant inconnu donne le message de l’erreur attrapée', async () => {
  assert.equal(await museumLabelOrMessage('M9999'), 'Erreur : Musée introuvable : M9999');
});
