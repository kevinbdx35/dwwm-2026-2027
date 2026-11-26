// Palier 3 — finally et .catch (jeudi matin). Autonome : cherchez dans MDN.
// 1. cityOrDefault(id) promet la ville du musée, ou 'Ville inconnue' si l'identifiant est inconnu.
//    Contrainte : sans async, sans await, sans try : avec then, et la méthode .catch des promesses.
// 2. trackLoading(id, state) : state est un objet { loading: false }.
//    - mettez state.loading à true, puis attendez loadMuseumOrFail(id) et renvoyez le musée ;
//    - que le chargement réussisse ou échoue, state.loading doit revenir à false : avec finally ;
//    - l'erreur d'un identifiant inconnu n'est pas attrapée ici : elle continue vers l'appelant.
// Lancez les tests : node --test g4-finally.defi.test.js
import { loadMuseumOrFail } from '../data/museum-db.js';

export function cityOrDefault(id) {
  // TODO: replace the two lines below with your code.
  console.log(loadMuseumOrFail);
  return Promise.resolve('');
}

export async function trackLoading(id, state) {
  // TODO: replace the line below with your code.
  return undefined;
}
