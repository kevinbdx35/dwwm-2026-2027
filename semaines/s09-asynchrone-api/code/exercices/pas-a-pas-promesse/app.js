// L'affichage : il lit et écrit dans la page. Il se vérifie dans le navigateur.
// Les lignes import et les trois sélections sont déjà écrites (les modules sont
// expliqués en semaine 10). Ouvrez la page avec Live Preview, jamais par un double-clic.
import { loadMuseum } from '../data/museum-db.js';
import { cityMuseumNames } from './logic.js';

const button = document.querySelector('#charger');
const status = document.querySelector('#etat');
const list = document.querySelector('#liste');

// Étape 1 : écrivez l'écouteur du bouton au-dessus de cette ligne.
// Vous supprimerez ces trois lignes à l'étape 4.
console.log('Prêt', button, status, list, loadMuseum, cityMuseumNames);
