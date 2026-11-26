// Pas à pas — Chargement..., puis la liste : l'affichage (lundi après-midi).
// Les deux lignes import sont déjà écrites : elles apportent les données et la fonction
// de logic.js (les modules sont expliqués en semaine 10). Ouvrez la page avec Live Preview.
import { MUSEUMS } from '../data/musees-bretagne.js';
import { museumLabel } from './logic.js';

console.log('Données chargées :', MUSEUMS.length, 'musées', museumLabel);

// Le bouton de la page
const button = document.querySelector('#action');
// Le paragraphe du message
const message = document.querySelector('#message');
// Au clic : le visiteur sait que sa demande est partie
button.addEventListener('click', () => {
  // Tout de suite : le message d'attente
  message.textContent = 'Chargement...';
});
