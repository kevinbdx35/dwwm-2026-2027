// Pas à pas — Mes musées favoris (vendredi matin).
// Tapez le code et ses commentaires, une étape à la fois, avec le groupe.
// Déjà écrit : les données, les éléments de la page, la liste des musées et le résumé.
import { MUSEUMS } from '../data/musees-bretagne.js';

// The key under which this page stores its favourites. One key per page:
// every page opened with Live Preview shares the same localStorage.
const KEY = 'pas-a-pas-favoris';
console.log('Clé de cette page :', KEY);

const summary = document.querySelector('#resume');
const list = document.querySelector('#liste');
const clearButton = document.querySelector('#vider');

// Les favoris : un tableau d'identifiants. Étape 2 : cette ligne change.
let favorites = [];

// Already written: the number of favourites and their identifiers.
function showSummary() {
  summary.textContent = `${favorites.length} favori(s) : ${favorites.join(', ')}`;
}

// Already written: one button per museum of the Côtes-d'Armor. A click calls choose(id).
for (const museum of MUSEUMS.filter((item) => item.Departement === "Côtes-d'Armor")) {
  const item = document.createElement('li');
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = `Ajouter : ${museum.Nom_officiel}`;
  button.addEventListener('click', () => choose(museum.Identifiant));
  item.append(button);
  list.append(item);
}

showSummary();

// Already written: the button "Tout retirer" empties the favourites of the page.
clearButton.addEventListener('click', () => {
  // Étape 3 : une ligne à ajouter ici, avec son commentaire.
  favorites = [];
  showSummary();
});

// Étape 1 — Un clic sur un musée appelle cette fonction.
function choose(id) {
  // Étape 1 : écrivez ici.
}

// Étape 2 — sous cette ligne : la fonction loadFavorites().
