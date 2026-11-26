// L'affichage : il lit et écrit dans la page. Il se vérifie dans le navigateur.
// Les lignes import et les trois sélections sont déjà écrites (les modules sont
// expliqués en semaine 10). Ouvrez la page avec Live Preview, jamais par un double-clic.
import { loadMuseum } from '../data/museum-db.js';
import { cityMuseumNames } from './logic.js';

const button = document.querySelector('#charger');
const status = document.querySelector('#etat');
const list = document.querySelector('#liste');

// Au clic sur le bouton Charger
button.addEventListener('click', () => {
  // Le message d'attente, tout de suite
  status.textContent = 'Chargement...';
  // La demande part : on reçoit une promesse, pas le musée
  const promise = loadMuseum('M0207');
  // Dans la console : la promesse, encore en attente
  console.log(promise);
  // then : la fonction donnée s'exécutera à l'arrivée
  promise.then((museum) => {
    // Le musée est arrivé : son nom remplace le message
    status.textContent = museum.Nom_officiel;
  });
});

// Étape 1 : écrivez l'écouteur du bouton au-dessus de cette ligne.
// Vous supprimerez ces trois lignes à l'étape 4.
console.log('Prêt', button, status, list, loadMuseum, cityMuseumNames);
