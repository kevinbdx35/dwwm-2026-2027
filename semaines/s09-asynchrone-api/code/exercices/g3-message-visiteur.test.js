// Tests for g3-message-visiteur/logic.js — run them with: node --test g3-message-visiteur.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { findCity } = await import(pathToFileURL(path.join(dir, 'g3-message-visiteur', 'logic.js')).href);

test('findCity : la ville d’un musée connu', async () => {
  assert.equal(await findCity('M0194'), 'Dinan');
});

test('findCity : les espaces autour de l’identifiant sont retirés', async () => {
  assert.equal(await findCity('  M0199 '), 'Concarneau');
});

test('findCity : un texte vide lève « Veuillez écrire un identifiant. »', async () => {
  await assert.rejects(findCity('   '), { message: 'Veuillez écrire un identifiant.' });
});

test('findCity : un identifiant inconnu laisse passer l’erreur du serveur', async () => {
  await assert.rejects(findCity('M9999'), { message: 'Musée introuvable : M9999' });
});
