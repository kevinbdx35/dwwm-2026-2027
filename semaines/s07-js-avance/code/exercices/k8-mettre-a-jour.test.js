// Tests for k8-mettre-a-jour.js — run them with: node --test k8-mettre-a-jour.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { renameMuseum } = await import(pathToFileURL(path.join(dir, 'k8-mettre-a-jour.js')).href);

test("renommage", () => {
  assert.deepEqual(renameMuseum([{"id": "M1", "name": "a"}, {"id": "M2", "name": "b"}], "M2", "c"), [{"id": "M1", "name": "a"}, {"id": "M2", "name": "c"}]);
});

test("id absent", () => {
  assert.deepEqual(renameMuseum([{"id": "M1", "name": "a"}], "M9", "z"), [{"id": "M1", "name": "a"}]);
});

test("le tableau et ses objets ne sont pas modifiés", () => {
  const museums = [{ id: 'M1', name: 'a' }];
  renameMuseum(museums, 'M1', 'b');
  assert.deepEqual(museums, [{ id: 'M1', name: 'a' }]);
});

test("tableau vide", () => {
  assert.deepEqual(renameMuseum([], "M1", "a"), []);
});
