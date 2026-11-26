// Palier 2 — Deux musées à la suite : la logique (mardi après-midi). La ligne import est déjà écrite.
// sameDepartment(idA, idB) attend le premier musée, puis le second,
// et renvoie true si leurs départements (le champ Departement) sont les mêmes, false sinon.
// Exemples : 'M0199' et 'M0207' donnent true (Finistère) ; 'M0194' et 'M0199' donnent false.
// Lancez les tests : node --test a3-deux-a-la-suite.test.js
import { loadMuseum } from '../data/museum-db.js';

export function sameDepartment(idA, idB) {
  // TODO: replace the three lines below with your code.
  loadMuseum(idA);
  loadMuseum(idB);
  return null;
}
