// Pas à pas — Les musées, depuis un fichier, puis depuis l'API (jeudi après-midi).
// La ligne import et la fonction showList sont déjà écrites : ne les modifiez pas.
// Ouvrez la page avec Live Preview, jamais par un double-clic.
import { buildMuseumsUrl } from './api.js';

const summary = document.querySelector('#resume');
const list = document.querySelector('#liste');

// Already written: shows the museums and the summary.
function showList(museums) {
  list.textContent = '';
  summary.textContent = `${museums.length} musées`;
  for (const museum of museums) {
    const item = document.createElement('li');
    item.textContent = `${museum.Nom_officiel} - ${museum.Ville}`;
    list.append(item);
  }
}

// Before the data arrives: an empty list.
showList([]);
// The address of the real API, used at step 4.
console.log('Adresse de l\'API :', buildMuseumsUrl());

// Étapes 1 à 4 : écrivez votre code sous cette ligne.
