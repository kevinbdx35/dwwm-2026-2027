// Palier 3 — Tous ensemble : la logique (mardi après-midi). La ligne import est déjà écrite.
// namesOf(ids) reçoit un tableau d'identifiants et renvoie, plus tard, le tableau des noms
// des musées, dans le même ordre. Les musées sont demandés tous ensemble, pas l'un après l'autre :
// quatre musées arrivent en 300 ms environ, et non en 1 200 ms.
// À chercher dans MDN : Promise.all.
// Lancez les tests : node --test a4-tous-ensemble.defi.test.js
import { loadMuseum } from '../data/museum-db.js';

export function namesOf(ids) {
  // TODO: replace the two lines below with your code.
  loadMuseum(ids[0]);
  return [];
}
