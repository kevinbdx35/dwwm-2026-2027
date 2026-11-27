// Palier 2 — Corriger : trois erreurs de promesse, la logique (consolidation des promesses)
// Ce code a été écrit trop vite : les tests sont rouges, et la page affiche [object Promise].
// Trouvez et corrigez les trois erreurs : deux dans ce fichier, une dans app.js.
// Ne réécrivez pas tout : chaque erreur se corrige en changeant une ou deux lignes.
// - cityLabelLater(id) promet le texte « nom (ville) », par exemple 'musée de Dinan (Dinan)' ;
// - countLater(city) promet le nombre de musées de la ville, par exemple 3 pour 'Rennes'.
// Lancez les tests (depuis semaine-09) : node --test c2-corriger-les-then.test.js
import { loadMuseum, loadMuseumsOfCity } from '../../data/museum-db.js';

// Gives the number of museums of an array. This function is right.
function countOf(museums) {
  return museums.length;
}

export function cityLabelLater(id) {
  return loadMuseum(id).then((museum) => {
    `${museum.Nom_officiel} (${museum.Ville})`;
  });
}

export function countLater(city) {
  return loadMuseumsOfCity(city).then(countOf());
}
