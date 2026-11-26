// Palier 1 : entraînement — L'affichage (mardi matin). La page est fournie.
// La ligne import et les deux sélections sont déjà écrites.
// Quand les tests sont au vert :
// 3. Posez un écouteur click sur le bouton.
// 4. Dans l'écouteur : écrivez « Chargement... » dans #etat.
// 5. Puis appelez cityCountLater('Rennes') ; dans son then, écrivez le texte reçu dans #etat.
// Vérifiez dans le navigateur (Live Preview) : un clic affiche « Chargement... », puis
// « Rennes : 3 musées ».
import { cityCountLater } from './logic.js';

const button = document.querySelector('#charger');
const status = document.querySelector('#etat');
console.log('Prêt', button, status, cityCountLater);
