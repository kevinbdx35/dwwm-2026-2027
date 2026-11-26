// Pas à pas — La logique (mardi après-midi). La ligne import est déjà écrite.
// cityOf(id) donne, plus tard, la ville du musée demandé.
import { loadMuseum } from '../data/museum-db.js';

// async : cityOf renvoie toujours une promesse
export async function cityOf(id) {
  // await : on attend le musée demandé
  const museum = await loadMuseum(id);
  // return : la promesse de cityOf donne la ville
  return museum.Ville;
}
