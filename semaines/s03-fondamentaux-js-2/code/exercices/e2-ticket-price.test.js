// Tests for e2-ticket-price.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { ticketPrice } = await import(pathToFileURL(path.join(dir, 'e2-ticket-price.js')).href);

test("child", () => {
  assert.deepEqual(ticketPrice(8), 6);
});

test("adult", () => {
  assert.deepEqual(ticketPrice(30), 10);
});

test("senior", () => {
  assert.deepEqual(ticketPrice(65), 7);
});

test("just 12", () => {
  assert.deepEqual(ticketPrice(12), 10);
});

test("negative age", () => {
  assert.deepEqual(ticketPrice(-1), null);
});
