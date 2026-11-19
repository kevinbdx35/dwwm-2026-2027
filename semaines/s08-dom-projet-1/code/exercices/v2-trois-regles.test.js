// Tests for v2-trois-regles/logic.js — run them with: node --test v2-trois-regles.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { checkProposal } = await import(pathToFileURL(path.join(dir, 'v2-trois-regles', 'logic.js')).href);

test('checkProposal : une proposition valide ne donne aucun message', () => {
  assert.deepEqual(checkProposal({ name: 'musée bigouden', postcode: '29120', city: "Pont-l'Abbé" }), []);
});

test('checkProposal : tout vide donne les trois messages, dans l’ordre', () => {
  assert.deepEqual(checkProposal({ name: '', postcode: '', city: '  ' }), [
    'Le nom compte au moins 3 caractères.',
    'Le code postal compte 5 chiffres.',
    'Écrivez la ville.',
  ]);
});

test('checkProposal : un code postal trop court ou qui n’est pas un nombre', () => {
  const message = ['Le code postal compte 5 chiffres.'];
  assert.deepEqual(checkProposal({ name: 'port musée', postcode: '2910', city: 'Douarnenez' }), message);
  assert.deepEqual(checkProposal({ name: 'port musée', postcode: '29A00', city: 'Douarnenez' }), message);
});
