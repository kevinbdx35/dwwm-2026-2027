// Palier 3 tests for project #1 — run them with: node --test projet-1.defi.test.js
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
const { countByDepartment } = await import(pathToFileURL(path.join(logicDir, 'logic.js')).href);
const { MUSEUMS } = await import(pathToFileURL(path.join(dataDir, 'data', 'musees-bretagne.js')).href);

test('countByDepartment : le nombre de musées de chaque département', () => {
  assert.deepEqual(countByDepartment(MUSEUMS), {
    "Côtes-d'Armor": 3,
    Finistère: 13,
    'Ille-et-Vilaine': 8,
    Morbihan: 10,
  });
});

test('countByDepartment : un tableau vide donne un objet vide', () => {
  assert.deepEqual(countByDepartment([]), {});
});
