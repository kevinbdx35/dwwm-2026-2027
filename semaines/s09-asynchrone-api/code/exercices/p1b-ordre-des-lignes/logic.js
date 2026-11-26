// Palier 1 : entraînement — Remettre dans l'ordre : la logique (mardi matin)
// upperNameLater(id) renvoie la promesse du nom du musée, en majuscules,
// par exemple 'MUSÉE DE LA PÊCHE'.
// Les 4 lignes de la fonction sont justes, mais DANS LE DÉSORDRE, et en commentaire.
// 1. Remettez-les dans l'ordre, sans changer un mot (déplacez seulement les lignes).
// 2. Retirez les « // » au début de ces 4 lignes.
// 3. Supprimez la ligne provisoire : return loadMuseum(id);
// Lancez les tests : node --test p1b-ordre-des-lignes.test.js
import { loadMuseum } from '../data/museum-db.js';

export function upperNameLater(id) {
  // const upperPromise = namePromise.then((name) => name.toUpperCase());
  // return upperPromise;
  // const namePromise = museumPromise.then((museum) => museum.Nom_officiel);
  // const museumPromise = loadMuseum(id);
  return loadMuseum(id);
}
