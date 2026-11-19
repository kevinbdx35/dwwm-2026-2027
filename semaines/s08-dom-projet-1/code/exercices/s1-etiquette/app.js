// Palier 1 — L'affichage (mardi matin). Les lignes import sont déjà écrites.
// Quand les tests sont au vert :
// 1. dans le <p id="resume">, écrivez « 34 musées » avec MUSEUMS.length ;
// 2. pour chaque musée, ajoutez au <ul id="liste"> un <li> qui contient placeLabel(museum).
// Vérifiez dans le navigateur (Live Preview) : 34 lignes, la première « Dinan (Côtes-d'Armor) ».
import { MUSEUMS } from '../data/musees-bretagne.js';
import { placeLabel } from './logic.js';

console.log('Données chargées :', MUSEUMS.length, 'musées', placeLabel);
