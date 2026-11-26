// Palier 1 : entraînement — Le message qui s'efface : l'affichage (lundi après-midi).
// Les lignes import sont déjà écrites. La logique d'abord (logic.js et ses tests), puis ici.
// Quand les tests sont au vert :
// 1. Trouvez le bouton (#action) et le message (#message).
// 2. Au clic : écrivez tout de suite confirmationMessage(MUSEUMS[0]) dans le message.
// 3. Dans le même écouteur : avec setTimeout, 3 secondes plus tard (3000),
//    videz le message (textContent = '').
// Vérifiez dans le navigateur (Live Preview) : un clic affiche
// « musée de Dinan ajouté aux favoris » ; le message disparaît 3 secondes plus tard.
import { MUSEUMS } from '../data/musees-bretagne.js';
import { confirmationMessage } from './logic.js';

console.log('Données chargées :', MUSEUMS.length, 'musées', confirmationMessage);
