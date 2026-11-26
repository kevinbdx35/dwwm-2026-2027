// Palier 1 — L'horaire, un peu plus tard : l'affichage (lundi après-midi).
// Les lignes import sont déjà écrites. La logique d'abord (logic.js et ses tests), puis ici.
// Quand les tests sont au vert :
// 1. Trouvez le bouton (#action) et le message (#message).
// 2. Au clic sur le bouton : écrivez tout de suite « Recherche... » dans le message.
// 3. Dans le même écouteur : avec setTimeout, 1 seconde plus tard (1000),
//    écrivez dans le message openingMessage(MUSEUMS[0], 14).
// Vérifiez dans le navigateur (Live Preview) : un clic affiche « Recherche... », puis,
// une seconde plus tard, « musée de Dinan : ouvert jusqu'à 18 h ».
import { MUSEUMS } from '../data/musees-bretagne.js';
import { openingMessage } from './logic.js';

console.log('Données chargées :', MUSEUMS.length, 'musées', openingMessage);
