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
  // On vide la liste avant de la remplir
  list.textContent = '';
  // La logique renvoie une promesse : les noms de la ville
  cityMuseumNames('M0207').then((names) => {
    // for...of : un <li> par nom reçu
    for (const name of names) {
      // Un nouveau <li>
      const item = document.createElement('li');
      // Son texte : le nom du musée
      item.textContent = name;
      // Ajouté à la fin de la liste
      list.append(item);
    }
  });
});
