// Palier 2 — Un message pour le visiteur : la logique (jeudi matin)
// findCity(text) promet la ville du musée qui a cet identifiant : findCity(' M0194 ') promet 'Dinan'.
// - texte vide, ou seulement des espaces : levez une erreur, 'Veuillez écrire un identifiant.' ;
// - sinon, attendez loadMuseumOrFail(identifiant sans espaces autour), puis renvoyez la ville du musée.
// Pour un identifiant inconnu, loadMuseumOrFail rompt sa promesse : laissez passer cette erreur,
// c'est app.js qui l'attrapera.
// Lancez les tests : node --test g3-message-visiteur.test.js
import { loadMuseumOrFail } from '../data/museum-db.js';

export async function findCity(text) {
  // TODO: replace the two lines below with your code.
  console.log(loadMuseumOrFail);
  return '';
}
