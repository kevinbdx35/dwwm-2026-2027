// Tests for g4-finally/logic.js — run them with: node --test g4-finally.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import fs from 'node:fs';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { cityOrDefault, trackLoading } = await import(pathToFileURL(path.join(dir, 'g4-finally', 'logic.js')).href);
const source = fs.readFileSync(path.join(dir, 'g4-finally', 'logic.js'), 'utf8');

test('cityOrDefault : la ville, ou « Ville inconnue »', async () => {
  assert.equal(await cityOrDefault('M0194'), 'Dinan');
  assert.equal(await cityOrDefault('M9999'), 'Ville inconnue');
});

test('cityOrDefault : écrite avec .catch, sans async ni try', () => {
  const body = source.slice(source.indexOf('export function cityOrDefault'), source.indexOf('trackLoading'));
  assert.ok(body.includes('.catch('), 'cityOrDefault must use .catch(');
  assert.ok(!body.includes('await'), 'cityOrDefault must not use await');
});

test('trackLoading : loading vaut true pendant le chargement, false après', async () => {
  const state = { loading: false };
  const promise = trackLoading('M0194', state);
  assert.equal(state.loading, true);
  const museum = await promise;
  assert.equal(museum.Ville, 'Dinan');
  assert.equal(state.loading, false);
});

test('trackLoading : après un échec, l’erreur continue et loading revient à false', async () => {
  const state = { loading: false };
  await assert.rejects(trackLoading('M9999', state), { message: 'Musée introuvable : M9999' });
  assert.equal(state.loading, false);
});
