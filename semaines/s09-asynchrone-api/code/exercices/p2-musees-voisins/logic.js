// Palier 2 — Les musées voisins : la logique (mardi matin)
// neighbourNames(id) renvoie une PROMESSE : celle du tableau des noms des AUTRES musées
// de la même ville que le musée id. Par exemple, pour 'M0211' (musée des beaux-arts, Rennes) :
// ['écomusée de la Bintinais', 'musée de Bretagne']. Un musée seul dans sa ville : [].
// Deux demandes à la suite : loadMuseum(id), puis loadMuseumsOfCity(sa ville).
// Une chaîne de then, sans en mettre un dans un autre.
// Lancez les tests : node --test p2-musees-voisins.test.js
import { loadMuseum, loadMuseumsOfCity } from '../data/museum-db.js';

export function neighbourNames(id) {
  // TODO: replace the line below with your chain of then.
  // (For now, the promise gives the whole museums of Rennes, whatever the id.)
  return loadMuseum(id).then(() => loadMuseumsOfCity('Rennes'));
}
