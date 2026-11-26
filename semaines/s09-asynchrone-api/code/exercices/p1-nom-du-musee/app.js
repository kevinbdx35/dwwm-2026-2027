// Palier 1 — L'affichage (mardi matin). La page est fournie : index.html et style.css
// ne changent pas. La ligne import et les deux sélections sont déjà écrites.
// Quand les tests sont au vert :
// 5. Posez un écouteur click sur le bouton.
// 6. Dans l'écouteur : écrivez « Chargement... » dans #etat (textContent).
// 7. Puis appelez museumLabelLater('M0199') ; dans son then, écrivez le texte reçu dans #etat.
// Vérifiez dans le navigateur (Live Preview) : un clic affiche « Chargement... », puis
// « musée de la pêche - Concarneau ».
import { museumLabelLater } from './logic.js';

const button = document.querySelector('#charger');
const status = document.querySelector('#etat');
console.log('Prêt', button, status, museumLabelLater);
