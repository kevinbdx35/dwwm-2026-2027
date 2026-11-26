// Défi de la semaine 9, palier 3 : la logique. Consigne complète : la page du vendredi 04/12 après-midi.
// Un musée est un objet comme MUSEUM, dans musees.js : { name, days, hours }.
//
// 1. isOpen(museum, day) renvoie true si day est dans museum.days, false sinon.
//    Exemple : isOpen(MUSEUM, 'mardi') renvoie true ; isOpen(MUSEUM, 'lundi') renvoie false.
// 2. openingText(museum, day) renvoie le texte affiché sous la liste des jours :
//    - jour d'ouverture : 'Ouvert le mardi, de 10 h à 18 h.' (le jour, une virgule, museum.hours, un point) ;
//    - jour de fermeture : 'Fermé le lundi.'
//    - si day n'est pas un des sept jours de DAYS, elle lance une erreur (throw, mardi 01/12)
//      dont le message commence par 'Jour inconnu'. Pour avoir DAYS, ajoutez en haut du fichier :
//      import { DAYS } from './musees.js';
// Lancez les tests depuis semaine-09 : node --test defi-01-musee-du-jour.defi.test.js

export function isOpen(museum, day) {
  // TODO: replace the line below with your code.
  return null;
}

export function openingText(museum, day) {
  // TODO: replace the line below with your code.
  return '';
}
