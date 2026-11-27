// Palier 1 — Le téléphone d'un musée : la logique (consolidation des promesses)
// phoneLater(id) renvoie une PROMESSE : celle du texte « nom : téléphone » du musée,
// par exemple 'musée de Dinan : 02 96 39 45 20'.
// loadMuseum(id) (déjà importée) renvoie la promesse du musée entier : ajoutez un then.
// Les champs du musée : museum.Nom_officiel et museum.Telephone.
// Lancez les tests (depuis semaine-09) : node --test c1-telephone-d-un-musee.test.js
import { loadMuseum } from '../../data/museum-db.js';

export function phoneLater(id) {
  // TODO: add a then to the line below, so that the promise gives the text and not the whole museum.
  return loadMuseum(id);
}
