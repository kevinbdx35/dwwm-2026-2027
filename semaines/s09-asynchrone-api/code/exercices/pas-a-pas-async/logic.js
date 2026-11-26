// Pas à pas — La logique (mardi après-midi). La ligne import est déjà écrite.
// cityOf(id) donne, plus tard, la ville du musée demandé.
import { loadMuseum } from '../data/museum-db.js';

// Étape 2 : à réécrire avec async et await.
export function cityOf(id) {
  return loadMuseum(id).then((museum) => museum.Ville);
}
