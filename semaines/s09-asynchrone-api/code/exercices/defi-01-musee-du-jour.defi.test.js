// Tests for defi-01-musee-du-jour/logic.js (palier 3) — run them with: node --test defi-01-musee-du-jour.defi.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR || import.meta.dirname;
const { isOpen, openingText } = await import(pathToFileURL(path.join(dir, 'defi-01-musee-du-jour', 'logic.js')).href);

// Another invented museum: open on Monday, closed on Sunday.
const clocks = { name: 'Maison des horloges', days: ['lundi', 'mardi', 'samedi'], hours: 'de 14 h à 17 h' };

test("isOpen : true un jour d'ouverture, false un jour de fermeture", () => {
  assert.equal(isOpen(clocks, 'lundi'), true);
  assert.equal(isOpen(clocks, 'dimanche'), false);
});

test("openingText : un jour d'ouverture donne le jour et les horaires", () => {
  assert.equal(openingText(clocks, 'samedi'), 'Ouvert le samedi, de 14 h à 17 h.');
});

test('openingText : un jour de fermeture', () => {
  assert.equal(openingText(clocks, 'jeudi'), 'Fermé le jeudi.');
});

test("openingText : un jour inconnu lance une erreur « Jour inconnu »", () => {
  assert.throws(() => openingText(clocks, 'lindi'), /^Error: Jour inconnu/);
});
