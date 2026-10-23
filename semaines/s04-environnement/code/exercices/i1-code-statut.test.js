// Tests for i1-code-statut.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { statusCategory } = await import(pathToFileURL(path.join(dir, 'i1-code-statut.js')).href);

test("200", () => {
  assert.deepEqual(statusCategory(200), "succès");
});

test("404", () => {
  assert.deepEqual(statusCategory(404), "erreur client");
});

test("301", () => {
  assert.deepEqual(statusCategory(301), "redirection");
});

test("503", () => {
  assert.deepEqual(statusCategory(503), "erreur serveur");
});

test("101", () => {
  assert.deepEqual(statusCategory(101), "information");
});

test("600", () => {
  assert.deepEqual(statusCategory(600), null);
});

test("42", () => {
  assert.deepEqual(statusCategory(42), null);
});
