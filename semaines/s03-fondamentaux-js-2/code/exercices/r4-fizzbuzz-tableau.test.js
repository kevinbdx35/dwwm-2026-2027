// Tests for r4-fizzbuzz-tableau.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { fizzbuzz } = await import(pathToFileURL(path.join(dir, 'r4-fizzbuzz-tableau.js')).href);

test("jusqu'à 5", () => {
  assert.deepEqual(fizzbuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
});

test("jusqu'à 15, dernier", () => {
  assert.deepEqual(fizzbuzz(15), ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
});

test("0", () => {
  assert.deepEqual(fizzbuzz(0), []);
});
