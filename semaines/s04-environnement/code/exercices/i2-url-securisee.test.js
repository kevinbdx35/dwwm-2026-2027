// Tests for i2-url-securisee.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { isSecureUrl } = await import(pathToFileURL(path.join(dir, 'i2-url-securisee.js')).href);

test("HTTPS", () => {
  assert.deepEqual(isSecureUrl("https://developer.mozilla.org/fr/"), true);
});

test("HTTP", () => {
  assert.deepEqual(isSecureUrl("http://exemple.fr"), false);
});

test("autre protocole", () => {
  assert.deepEqual(isSecureUrl("ftp://exemple.fr"), false);
});

test("pas une adresse", () => {
  assert.deepEqual(isSecureUrl("exemple.fr"), false);
});
