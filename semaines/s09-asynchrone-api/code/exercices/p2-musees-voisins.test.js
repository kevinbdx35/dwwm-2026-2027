// Tests for p2-musees-voisins/logic.js — run them with: node --test p2-musees-voisins.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { neighbourNames } = await import(pathToFileURL(path.join(dir, 'p2-musees-voisins', 'logic.js')).href);

test('neighbourNames : les autres musées de la même ville', async () => {
  const names = await neighbourNames('M0211');
  assert.deepEqual(names.toSorted(), ['musée de Bretagne', 'écomusée de la Bintinais']);
});

test('neighbourNames : le musée demandé ne fait pas partie de ses voisins', async () => {
  const names = await neighbourNames('M0207');
  assert.deepEqual(names, ['musée départemental breton']);
});

test('neighbourNames : un musée seul dans sa ville, un tableau vide', async () => {
  assert.deepEqual(await neighbourNames('M0194'), []);
});
