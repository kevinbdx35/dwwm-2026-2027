// Tests for p1-bissextile.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { isLeapYear } = await import(pathToFileURL(path.join(dir, 'p1-bissextile.js')).href);

test("2024", () => {
  assert.deepEqual(isLeapYear(2024), true);
});

test("2023", () => {
  assert.deepEqual(isLeapYear(2023), false);
});

test("1900", () => {
  assert.deepEqual(isLeapYear(1900), false);
});

test("2000", () => {
  assert.deepEqual(isLeapYear(2000), true);
});

test("2100", () => {
  assert.deepEqual(isLeapYear(2100), false);
});
