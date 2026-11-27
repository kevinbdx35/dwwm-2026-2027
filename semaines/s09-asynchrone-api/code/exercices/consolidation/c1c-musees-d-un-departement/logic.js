// Palier 1 : entraînement — Les musées d'un département : la logique (consolidation des promesses)
// departmentCountLater(department) renvoie une PROMESSE : celle du texte
// « département : nombre musées », par exemple 'Morbihan : 10 musées'.
// loadMuseums() (déjà importée) promet le tableau des 34 musées : ajoutez un then,
// gardez les musées du département (filter, semaine 7), puis renvoyez le texte.
// Le champ du musée : museum.Departement.
// Lancez les tests (depuis semaine-09) : node --test c1c-musees-d-un-departement.test.js
import { loadMuseums } from '../../data/museum-db.js';

export function departmentCountLater(department) {
  // TODO: add a then to the line below, so that the promise gives the text.
  return loadMuseums();
}
