// Palier 1 — Garder un favori : la logique (vendredi matin)
// 1. addFavorite(favorites, id) renvoie un NOUVEAU tableau : les favoris, puis id à la fin.
//    Si id est déjà dans favorites, elle renvoie une copie de favorites, sans rien ajouter.
//    Exemple : addFavorite(['M0194'], 'M0213') renvoie ['M0194', 'M0213'].
// 2. readFavorites(text) reçoit ce que renvoie localStorage.getItem : un texte JSON, ou null.
//    Pour null, elle renvoie [] ; sinon, le tableau obtenu avec JSON.parse(text).
//    Exemple : readFavorites('["M0194"]') renvoie ['M0194'].
// Lancez les tests : node --test j1-garder-un-favori.test.js

export function addFavorite(favorites, id) {
  // TODO: replace the line below with your code.
  return [];
}

export function readFavorites(text) {
  // TODO: replace the line below with your code.
  return ['?'];
}
