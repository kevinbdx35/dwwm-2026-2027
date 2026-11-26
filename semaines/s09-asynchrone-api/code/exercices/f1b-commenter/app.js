// Palier 1 : entraînement — Commenter : l'affichage (jeudi après-midi)
// Ce code marche : ne le modifiez pas. Remplacez chaque « // ? » par une phrase, en français,
// qui explique la ligne placée juste en dessous.
// Vérifiez dans le navigateur (Live Preview) que la page marche toujours : « 3 musées », puis 3 lignes.
import { loadMuseumsOfCity } from './logic.js';

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

// ?
async function start() {
  // ?
  try {
    // ?
    const museums = await loadMuseumsOfCity('../data/musees-bretagne.json', 'Rennes');
    // ?
    showList(museums);
  // ?
  } catch (error) {
    // ?
    const message = document.querySelector('#message');
    // ?
    message.textContent = `Chargement impossible. ${error.message}`;
    // ?
    message.hidden = false;
  }
}

// ?
start();
