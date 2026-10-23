// Tests for i3-hote.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { hostOf } = await import(pathToFileURL(path.join(dir, 'i3-hote.js')).href);

test("avec port et paramètres", () => {
  assert.deepEqual(hostOf("https://www.exemple.fr:8080/page?q=js"), "www.exemple.fr");
});

test("simple", () => {
  assert.deepEqual(hostOf("http://localhost/"), "localhost");
});

test("pas une adresse", () => {
  assert.deepEqual(hostOf("bonjour"), null);
});
