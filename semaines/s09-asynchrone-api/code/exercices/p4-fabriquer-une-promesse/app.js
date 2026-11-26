// Palier 3 — L'affichage (mardi matin). La page est fournie.
// Au clic sur le bouton : écrivez « Patientez 2 secondes... » dans #etat, puis, avec wait,
// écrivez « C'est prêt. » 2 secondes plus tard.
import { wait } from './logic.js';

const button = document.querySelector('#charger');
const status = document.querySelector('#etat');
console.log('Prêt', button, status, wait);
