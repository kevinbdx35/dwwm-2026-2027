// A pretend slow server: every function answers later, with a promise.
// Already written: do not change this file. Its inside (new Promise) is a palier 3 subject.
// Data: the 34 museums of Brittany (data/musees-bretagne.js).
import { MUSEUMS } from './musees-bretagne.js';

// How long the pretend server takes to answer, in milliseconds.
export const DELAY = 300;

// Gives the value later: after DELAY milliseconds.
function later(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), DELAY);
  });
}

/**
 * Promises every museum (a copy of the array).
 * @returns {Promise<object[]>}
 */
export function loadMuseums() {
  return later([...MUSEUMS]);
}

/**
 * Promises the museum that has this identifier, or undefined if there is none.
 * This promise never fails.
 * @param {string} id for example 'M0194'
 * @returns {Promise<object | undefined>}
 */
export function loadMuseum(id) {
  return later(MUSEUMS.find((museum) => museum.Identifiant === id));
}

/**
 * Promises the museums of one city (an empty array if there is none).
 * @param {string} city for example 'Rennes'
 * @returns {Promise<object[]>}
 */
export function loadMuseumsOfCity(city) {
  return later(MUSEUMS.filter((museum) => museum.Ville === city));
}

/**
 * Promises the museum that has this identifier. Used from Tuesday afternoon:
 * for an unknown identifier, the promise FAILS with an Error ('Musée introuvable : M9999').
 * @param {string} id
 * @returns {Promise<object>}
 */
export function loadMuseumOrFail(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const museum = MUSEUMS.find((item) => item.Identifiant === id);
      if (museum === undefined) {
        reject(new Error(`Musée introuvable : ${id}`));
      } else {
        resolve(museum);
      }
    }, DELAY);
  });
}
