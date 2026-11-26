// Dossier de rattrapage, étape 2 du pas à pas « US-4 ». Cette page ne contient que la liste (US-1) :
// votre app.js a aussi la recherche (US-2) et le détail (US-3). Ne copiez pas ce fichier à la place
// du vôtre : recopiez dans le vôtre les lignes marquées « US-4 ».
import { MUSEUMS } from './data/musees-bretagne.js';
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

showList(MUSEUMS);
