// Palier 1 — Le nom et la ville d'un musée : la logique (mardi matin)
// museumLabelLater(id) renvoie une PROMESSE : celle du texte « nom - ville » du musée,
// par exemple 'musée de la pêche - Concarneau'.
// loadMuseum(id) (déjà importée) renvoie la promesse du musée entier : ajoutez un then.
// Les champs du musée : museum.Nom_officiel et museum.Ville.
// Lancez les tests : node --test p1-nom-du-musee.test.js
import { loadMuseum } from '../data/museum-db.js';

export function museumLabelLater(id) {
  // TODO: add a then to the line below, so that the promise gives the text and not the whole museum.
  return loadMuseum(id);
}
