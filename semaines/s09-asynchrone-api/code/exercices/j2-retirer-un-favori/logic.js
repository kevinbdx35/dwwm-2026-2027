// Palier 2 — Retirer un favori : la logique (vendredi matin)
// 1. toggleFavorite(favorites, id) renvoie un NOUVEAU tableau :
//    - si id n'est pas dans favorites : les favoris, puis id à la fin ;
//    - si id y est déjà : les favoris SANS id (filter, semaine 7).
// 2. readFavorites(text) reçoit ce que renvoie localStorage.getItem : un texte, ou null.
//    - pour null : [] ;
//    - pour un texte JSON valide : le tableau obtenu avec JSON.parse ;
//    - pour un texte qui n'est pas du JSON (JSON.parse lance une erreur) : [], grâce à try / catch
//      (mardi) : catch (error) { … }, comme mardi.
// Lancez les tests : node --test j2-retirer-un-favori.test.js

export function toggleFavorite(favorites, id) {
  // TODO: replace the line below with your code.
  return [];
}

export function readFavorites(text) {
  // TODO: replace the line below with your code.
  return ['?'];
}
