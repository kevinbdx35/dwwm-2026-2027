// Palier 1 : entraînement — Les musées d'une ville : la logique (mardi matin)
// cityCountLater(city) renvoie une PROMESSE : celle du texte « ville : nombre musées »,
// par exemple 'Rennes : 3 musées'.
// loadMuseumsOfCity(city) (déjà importée) renvoie la promesse du tableau des musées de
// cette ville : ajoutez un then, et utilisez la longueur du tableau reçu.
// Lancez les tests : node --test p1c-musees-d-une-ville.test.js
import { loadMuseumsOfCity } from '../data/museum-db.js';

export function cityCountLater(city) {
  // TODO: add a then to the line below, so that the promise gives the text and not the array.
  return loadMuseumsOfCity(city);
}
