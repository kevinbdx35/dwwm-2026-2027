// Palier 1 — L'affichage (consolidation des promesses). La page est fournie : index.html et style.css
// ne changent pas. La ligne import et les deux sélections sont déjà écrites.
// Quand les tests sont au vert :
// 1. Posez un écouteur click sur le bouton.
// 2. Dans l'écouteur : écrivez « Chargement... » dans #etat (textContent).
// 3. Puis appelez phoneLater('M0194') ; dans son then, écrivez le texte reçu dans #etat.
// Vérifiez dans le navigateur (Live Preview) : un clic affiche « Chargement... », puis
// « musée de Dinan : 02 96 39 45 20 ».
import { phoneLater } from './logic.js';

const button = document.querySelector('#charger');
const status = document.querySelector('#etat');
console.log('Prêt', button, status, phoneLater);
