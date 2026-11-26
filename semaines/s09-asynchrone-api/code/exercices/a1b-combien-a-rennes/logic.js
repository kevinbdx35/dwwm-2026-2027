// Palier 1 : entraînement — Combien de musées à Rennes ? La logique (mardi après-midi)
// countInCity(city) attend les musées de la ville, puis renvoie leur nombre. Exemple : 'Rennes' donne 3.
// loadMuseumsOfCity(city) promet un tableau de musées (vide si la ville n'en a pas).
// 1. Ajoutez async devant function. 2. Attendez le tableau avec await. 3. Renvoyez sa longueur.
// Lancez les tests : node --test a1b-combien-a-rennes.test.js
import { loadMuseumsOfCity } from '../data/museum-db.js';

export function countInCity(city) {
  // TODO: replace the two lines below with your code.
  loadMuseumsOfCity(city);
  return -1;
}
