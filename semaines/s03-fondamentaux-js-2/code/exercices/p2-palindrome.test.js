// Tests for p2-palindrome.js — run them with: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { isPalindrome } = await import(pathToFileURL(path.join(dir, 'p2-palindrome.js')).href);

test("Kayak", () => {
  assert.deepEqual(isPalindrome("Kayak"), true);
});

test("radar", () => {
  assert.deepEqual(isPalindrome("radar"), true);
});

test("chat", () => {
  assert.deepEqual(isPalindrome("chat"), false);
});

test("une lettre", () => {
  assert.deepEqual(isPalindrome("a"), true);
});
