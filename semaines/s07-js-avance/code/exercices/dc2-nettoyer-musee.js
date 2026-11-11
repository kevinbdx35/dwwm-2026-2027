// Palier 2 — Nettoyer un musée, partie 2 : l'objet (mardi après-midi : les objets)
// cleanMuseum(raw) transforme une ligne brute du fichier en objet propre :
//   { id, name, city, department, paid, free, total, schoolVisits }
// - id : IDMuseofile ; name : nom_du_musee SANS espaces au début et à la fin (trim) ;
// - city : ville ; department : departement ;
// - paid, free, total, schoolVisits : payant, gratuit, total, scolaires convertis avec toNumber.
// Réutilisez votre fonction toNumber (import déjà écrit ci-dessous).
import { toNumber } from './dc1-nettoyer-nombre.js';

export function cleanMuseum(raw) {
  // TODO: replace the line below with your code.
  return toNumber(`À faire (${raw})`);
}
