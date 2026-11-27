// Palier 1 — Les noms des musées, avec fetch : la logique (consolidation de fetch)
// loadNames(url) est une fonction async :
// 1. elle demande l'adresse url avec fetch, et attend la réponse (await) ;
// 2. elle transforme la réponse en objets JavaScript avec response.json(), et attend encore ;
// 3. elle renvoie le tableau des NOMS des musées : le champ data du résultat, puis map
//    sur museum.Nom_officiel. Par exemple : ['musée de Dinan', 'musée de la pêche', ...].
// Lancez les tests (depuis semaine-09) : node --test cf1-noms-des-musees.test.js

export async function loadNames(url) {
  // TODO: replace the line below with your code.
  return [];
}
