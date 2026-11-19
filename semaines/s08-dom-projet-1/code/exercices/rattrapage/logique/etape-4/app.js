// L'affichage : il lit et écrit dans la page. Il se vérifie dans le navigateur.
// Les deux lignes import sont déjà écrites : elles apportent les données et les fonctions
// de logic.js (les modules sont expliqués en semaine 10). Ouvrez la page avec Live Preview.
import { MUSEUMS } from '../data/musees-bretagne.js';
import { museumLabel, inDepartment } from './logic.js';

console.log('Données chargées :', MUSEUMS.length, 'musées', museumLabel, inDepartment);

// La liste de la page, vide pour l'instant
const list = document.querySelector('#liste');
// for...of : un <li> par musée du fichier
for (const museum of MUSEUMS) {
  // Un nouveau <li>
  const item = document.createElement('li');
  // Son texte vient de la logique : museumLabel
  item.textContent = museumLabel(museum);
  // Ajouté à la fin de la liste
  list.append(item);
}

// La logique calcule : les musées du Morbihan
const morbihan = inDepartment(MUSEUMS, 'Morbihan');
// Le résumé de la page
const summary = document.querySelector('#resume');
// L'affichage écrit le résultat dans le résumé
summary.textContent = `${morbihan.length} musées dans le Morbihan`;
