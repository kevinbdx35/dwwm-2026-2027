// Palier 3 — Nettoyer tout le fichier (mardi après-midi)
// cleanAll(rawList) renvoie le tableau des musées nettoyés (avec cleanMuseum), en :
// - écartant les lignes SANS identifiant (IDMuseofile vide) ;
// - ne gardant qu'UNE fois un musée présent plusieurs fois (même identifiant) : gardez la première ligne rencontrée.
// Le vrai fichier contient 116 lignes : il doit en rester 114.
// Les tests : node --test dc3-nettoyer-tout.defi.test.js
import { cleanMuseum } from './dc2-nettoyer-musee.js';

export function cleanAll(rawList) {
  // TODO: replace the line below with your code.
  return [cleanMuseum(rawList[0])];
}
