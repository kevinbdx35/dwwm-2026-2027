// Palier 1 : entraînement — Le département d'un musée : la logique (consolidation des promesses)
// departmentLater(id) renvoie une PROMESSE : celle du département du musée,
// par exemple 'Morbihan' pour 'M0228' (musée des beaux-arts de Vannes).
// loadMuseum(id) (déjà importée) renvoie la promesse du musée entier : ajoutez un then.
// Le champ du musée : museum.Departement.
// Lancez les tests (depuis semaine-09) : node --test c1b-departement-d-un-musee.test.js
import { loadMuseum } from '../../data/museum-db.js';

export function departmentLater(id) {
  // TODO: add a then to the line below, so that the promise gives the department.
  return loadMuseum(id);
}
