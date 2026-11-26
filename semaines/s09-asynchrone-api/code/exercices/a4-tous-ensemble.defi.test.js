// Tests for a4-tous-ensemble/logic.js — run them with: node --test a4-tous-ensemble.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { namesOf } = await import(pathToFileURL(path.join(dir, 'a4-tous-ensemble', 'logic.js')).href);

const IDS = ['M0194', 'M0199', 'M0207', 'M0213'];

test('namesOf : les noms, dans le même ordre', async () => {
  assert.deepEqual(await namesOf(IDS), [
    'musée de Dinan',
    'musée de la pêche',
    'musée des beaux-arts',
    'écomusée de la Bintinais',
  ]);
});

test('namesOf : un tableau vide donne un tableau vide', async () => {
  assert.deepEqual(await namesOf([]), []);
});

test('namesOf : les quatre musées sont demandés ensemble (moins de 900 ms)', async () => {
  const start = performance.now();
  await namesOf(IDS);
  const elapsed = performance.now() - start;
  assert.ok(elapsed < 900, `the four museums took ${Math.round(elapsed)} ms: asked one after the other?`);
});
