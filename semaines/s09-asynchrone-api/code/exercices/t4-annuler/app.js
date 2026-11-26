// Palier 3 — Annuler : l'affichage (lundi après-midi). La ligne import est déjà écrite.
// Le besoin : un clic sur « Retirer le musée de Dinan » affiche « Retiré dans 5 secondes... »
// et un bouton « Annuler ». Sans clic sur « Annuler », le message devient « musée de Dinan retiré »
// au bout de 5 secondes. Avec un clic sur « Annuler » avant la fin : « Retrait annulé », et rien d'autre.
// À vous de décider quoi ajouter dans index.html et quoi écrire ici.
import { scheduleRemoval } from './logic.js';

console.log('À faire', scheduleRemoval);
