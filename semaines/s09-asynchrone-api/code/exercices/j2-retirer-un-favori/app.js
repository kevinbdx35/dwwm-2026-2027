// Palier 2 — Retirer un favori : l'affichage (vendredi matin). Les lignes import sont déjà écrites.
// Vous écrivez deux fichiers sur trois : style.css (la classe .favori) et le JavaScript ; index.html est fourni.
// D'abord la logique (logic.js et ses tests). Puis :
// 3. style.css : la classe .favori, pour un bouton de musée favori (par exemple un fond #17703a
//    et une bordure de la même couleur).
// 4. Au chargement : favorites reçoit les favoris enregistrés sous la clé KEY.
// 5. Dans showPage : un favori a la classe favori et le texte « * Retirer : nom » ;
//    les autres ont le texte « Ajouter : nom ».
// 6. Un clic sur un musée : toggleFavorite, puis enregistrer sous KEY, puis showPage.
// 7. Le bouton « Tout retirer » : effacer la clé KEY (removeItem), vider favorites, puis showPage.
// 8. Supprimez la ligne console.log (« À compléter »).
// Vérifiez dans le navigateur (Live Preview) : deux clics sur le même musée l'ajoutent, puis le retirent ;
// les favoris sont toujours là après un rechargement.
import { MUSEUMS } from '../data/musees-bretagne.js';
import { toggleFavorite, readFavorites } from './logic.js';

// One key per page: every page opened with Live Preview shares the same localStorage.
const KEY = 'j2-favoris';

const summary = document.querySelector('#resume');
const list = document.querySelector('#liste');
const clearButton = document.querySelector('#vider');
const museums = MUSEUMS.filter((museum) => museum.Departement === 'Finistère');
console.log('À compléter :', toggleFavorite, readFavorites, KEY);

// Étape 4 : les favoris enregistrés, à la place de [].
let favorites = [];

function showPage() {
  summary.textContent = `${favorites.length} favori(s) sur ${museums.length} musées`;
  list.textContent = '';
  for (const museum of museums) {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    // Étape 5 : le texte du bouton et sa classe, selon que le musée est un favori ou non.
    button.textContent = museum.Nom_officiel;
    // Étape 6 : l'écouteur click de ce bouton.
    item.append(button);
    list.append(item);
  }
}

// Étape 7 : le bouton « Tout retirer ».
clearButton.addEventListener('click', () => {
  favorites = [];
  showPage();
});

showPage();
