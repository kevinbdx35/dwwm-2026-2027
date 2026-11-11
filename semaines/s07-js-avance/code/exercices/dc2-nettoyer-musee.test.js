// Tests for dc2-nettoyer-musee.js — run them with: node --test dc2-nettoyer-musee.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Imports the exercise (or, for the trainer, the solution folder given in EXERCISES_DIR).
const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const { cleanMuseum } = await import(pathToFileURL(path.join(dir, 'dc2-nettoyer-musee.js')).href);

test('une ligne complète', () => {
  const raw = {
    IDMuseofile: 'M0290', nom_du_musee: 'musée X ', ville: 'BAZEILLES', departement: 'Ardennes',
    payant: '1449', gratuit: '1716', total: '3165', scolaires: '53',
  };
  assert.deepEqual(cleanMuseum(raw), {
    id: 'M0290', name: 'musée X', city: 'BAZEILLES', department: 'Ardennes',
    paid: 1449, free: 1716, total: 3165, schoolVisits: 53,
  });
});

test('scolaires manquant : null', () => {
  const raw = {
    IDMuseofile: 'M1', nom_du_musee: 'musée Y', ville: 'METZ', departement: 'Moselle',
    payant: '10', gratuit: '5', total: '15', scolaires: '',
  };
  assert.equal(cleanMuseum(raw).schoolVisits, null);
});
