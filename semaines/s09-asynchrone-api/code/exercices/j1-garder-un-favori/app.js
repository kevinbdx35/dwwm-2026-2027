// Palier 1 — Garder un favori : l'affichage (vendredi matin). Les lignes import sont déjà écrites.
// D'abord la logique (logic.js et ses tests). Quand les tests sont au vert :
// 3. Ligne A : au chargement, favorites reçoit les favoris enregistrés :
//    readFavorites(localStorage.getItem(KEY)), à la place de [].
// 4. Lignes B, dans choose(id) : favorites reçoit addFavorite(favorites, id) ; puis enregistrez
//    favorites sous la clé KEY, avec localStorage.setItem et JSON.stringify.
// 5. Supprimez la ligne console.log qui suit les lignes import.
// Vérifiez dans le navigateur (Live Preview) : un clic sur deux musées, « 2 favori(s) » ;
// rechargez la page : toujours « 2 favori(s) », et les deux musées gardent leur étoile.
import { MUSEUMS } from '../data/musees-bretagne.js';
import { addFavorite, readFavorites } from './logic.js';
console.log('À compléter :', addFavorite, readFavorites);

// One key per page: every page opened with Live Preview shares the same localStorage.
const KEY = 'j1-favoris';

const summary = document.querySelector('#resume');
const list = document.querySelector('#liste');
const clearButton = document.querySelector('#vider');
const museums = MUSEUMS.filter((museum) => museum.Departement === 'Ille-et-Vilaine');

// Ligne A : remplacez [] par les favoris enregistrés.
let favorites = [];

// A click on a museum calls this function.
function choose(id) {
  // Lignes B : ajoutez le favori, puis enregistrez.
  showPage();
}

// Already written: the summary, then one button per museum; a favourite gets a star.
function showPage() {
  summary.textContent = `${favorites.length} favori(s)`;
  list.textContent = '';
  for (const museum of museums) {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    const star = favorites.includes(museum.Identifiant) ? '* ' : '';
    button.textContent = `${star}${museum.Nom_officiel} - ${museum.Ville}`;
    button.addEventListener('click', () => choose(museum.Identifiant));
    item.append(button);
    list.append(item);
  }
}

// Already written: the button "Tout retirer".
clearButton.addEventListener('click', () => {
  localStorage.removeItem(KEY);
  favorites = [];
  showPage();
});

showPage();
