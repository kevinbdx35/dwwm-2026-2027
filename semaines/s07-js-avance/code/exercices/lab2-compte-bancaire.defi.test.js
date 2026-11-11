// Tests for lab2-compte-bancaire.js (palier 3) — run them with: node --test lab2-compte-bancaire.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { createAccount } = await import(pathToFileURL(path.join(dir, 'lab2-compte-bancaire.js')).href);

test('dépôt et retrait', () => {
  const account = createAccount(100);
  assert.equal(account.deposit(50), true);
  assert.equal(account.withdraw(30), true);
  assert.equal(account.balance(), 120);
});

test('retrait refusé si le solde ne suffit pas', () => {
  const account = createAccount(20);
  assert.equal(account.withdraw(50), false);
  assert.equal(account.balance(), 20);
});

test('montants négatifs ou nuls refusés', () => {
  const account = createAccount(10);
  assert.equal(account.deposit(-5), false);
  assert.equal(account.withdraw(0), false);
  assert.equal(account.balance(), 10);
});

test('le solde est privé', () => {
  const account = createAccount(10);
  assert.equal(account.current, undefined);
});
