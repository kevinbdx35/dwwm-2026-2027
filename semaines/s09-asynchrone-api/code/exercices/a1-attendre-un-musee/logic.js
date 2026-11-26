// Palier 1 — Attendre un musée : la logique (mardi après-midi). La ligne import est déjà écrite.
// museumCity(id) attend le musée demandé, puis renvoie sa ville. Exemple : 'M0194' donne 'Dinan'.
// 1. Ajoutez le mot async devant function.
// 2. Attendez loadMuseum(id) avec await, et rangez le musée dans une constante.
// 3. Renvoyez la ville du musée : son champ Ville.
// Lancez les tests : node --test a1-attendre-un-musee.test.js
import { loadMuseum } from '../data/museum-db.js';

export function museumCity(id) {
  // TODO: replace the two lines below with your code.
  loadMuseum(id);
  return '';
}
