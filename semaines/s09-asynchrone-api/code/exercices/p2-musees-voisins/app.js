// Palier 2 — L'affichage (mardi matin). La page est fournie.
// La ligne import et les trois sélections sont déjà écrites.
// Quand les tests sont au vert, au clic sur le bouton :
// - écrivez « Chargement... » dans #etat, et videz #liste ;
// - appelez neighbourNames('M0211') ; à l'arrivée des noms :
//   - s'il n'y en a aucun, écrivez « Aucun autre musée dans cette ville. » dans #etat ;
//   - sinon, écrivez « 2 musées voisins » dans #etat (avec la longueur du tableau),
//     puis un <li> par nom dans #liste.
// Essayez ensuite avec 'M0194' (musée de Dinan, seul dans sa ville).
import { neighbourNames } from './logic.js';

const button = document.querySelector('#charger');
const status = document.querySelector('#etat');
const list = document.querySelector('#liste');
console.log('Prêt', button, status, list, neighbourNames);
