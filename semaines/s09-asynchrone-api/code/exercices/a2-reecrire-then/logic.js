// Palier 2 — Réécrire sans then : la logique (mardi après-midi). La ligne import est déjà écrite.
// Ces deux fonctions marchent : elles sont écrites avec then, comme hier.
// Réécrivez-les avec async et await, sans changer ce qu'elles renvoient.
// museumLabel('M0194') donne 'musée de Dinan - Dinan'.
// twoCities('M0199', 'M0207') donne 'Concarneau et Quimper'.
// Lancez les tests : node --test a2-reecrire-then.test.js
// Deux tests vérifient les résultats (déjà au vert) ; deux tests lisent votre code :
// plus aucun then suivi d'une parenthèse, ni dans logic.js ni dans app.js.
import { loadMuseum } from '../data/museum-db.js';

export function museumLabel(id) {
  return loadMuseum(id).then((museum) => `${museum.Nom_officiel} - ${museum.Ville}`);
}

export function twoCities(idA, idB) {
  return loadMuseum(idA).then((first) => {
    return loadMuseum(idB).then((second) => `${first.Ville} et ${second.Ville}`);
  });
}
