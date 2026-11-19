// Palier 2 — Filtrer par département : l'affichage (mardi matin). Les lignes import sont déjà écrites.
// showList est déjà écrite : elle affiche un tableau de musées et le résumé.
// Quand les tests sont au vert, ajoutez un écouteur 'click' sur chaque bouton :
// « Finistère » appelle showList(inDepartment(MUSEUMS, 'Finistère')), et ainsi de suite ;
// « Tous » appelle showList(inDepartment(MUSEUMS, '')).
// Vérifiez dans le navigateur : Finistère 13, Morbihan 10, Ille-et-Vilaine 8, Côtes-d'Armor 3, Tous 34.
import { MUSEUMS } from '../data/musees-bretagne.js';
import { inDepartment } from './logic.js';

const list = document.querySelector('#liste');
const summary = document.querySelector('#resume');

function showList(museums) {
  list.textContent = '';
  summary.textContent = `${museums.length} musées`;
  for (const museum of museums) {
    const item = document.createElement('li');
    item.textContent = `${museum.Nom_officiel} — ${museum.Ville}`;
    list.append(item);
  }
}

showList(MUSEUMS);
console.log('À écrire : les écouteurs', inDepartment);
