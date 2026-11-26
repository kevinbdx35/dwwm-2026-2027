// Pas à pas — Chargement..., puis la liste : l'affichage (lundi après-midi).
// Les deux lignes import sont déjà écrites : elles apportent les données et la fonction
// de logic.js (les modules sont expliqués en semaine 10). Ouvrez la page avec Live Preview.
import { MUSEUMS } from '../data/musees-bretagne.js';
import { museumLabel } from './logic.js';

console.log('Données chargées :', MUSEUMS.length, 'musées', museumLabel);
