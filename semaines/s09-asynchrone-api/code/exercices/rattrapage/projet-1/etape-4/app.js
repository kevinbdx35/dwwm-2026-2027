// Dossier de rattrapage, étape 4 du pas à pas « US-4 ». Cette page ne contient que la liste (US-1) :
// votre app.js a aussi la recherche (US-2) et le détail (US-3). Ne copiez pas ce fichier à la place
// du vôtre : recopiez dans le vôtre les lignes marquées « US-4 ».
// US-4 — api.js construit l'adresse de la requête
import { buildMuseumsUrl } from './api.js';
// US-4 — loading.js demande les musées à cette adresse
import { loadMuseums } from './loading.js';
import { museumLabel } from './logic.js';

const summary = document.querySelector('#resume');
const list = document.querySelector('#liste');

// US-1 : vide la liste, écrit le résumé, puis affiche un <li> par musée.
function showList(found) {
  list.textContent = '';
  summary.textContent = `${found.length} musées`;
  for (const museum of found) {
    const item = document.createElement('li');
    item.textContent = museumLabel(museum);
    list.append(item);
  }
}

// US-4 — Le tableau des musées : vide avant la réponse
let museums = [];

// US-4 — async : cette fonction attend la réponse de l'API
async function start() {
  // await : on attend les musées, sans bloquer la page
  museums = await loadMuseums(buildMuseumsUrl());
  // La liste, avec les musées reçus
  showList(museums);
}

// US-4 — Au chargement de la page : on lance la demande
start();
