// Palier 1 : entraînement — L'affichage (consolidation des promesses). La page est fournie.
// La ligne import et les deux sélections sont déjà écrites.
// Quand les tests sont au vert :
// 1. Posez un écouteur click sur le bouton.
// 2. Dans l'écouteur : écrivez « Chargement... » dans #etat.
// 3. Puis appelez departmentLater('M0228') ; dans son then, écrivez « Département : » suivi
//    du département reçu, dans #etat.
// Vérifiez dans le navigateur (Live Preview) : un clic affiche « Chargement... », puis
// « Département : Morbihan ».
import { departmentLater } from './logic.js';

const button = document.querySelector('#charger');
const status = document.querySelector('#etat');
console.log('Prêt', button, status, departmentLater);
