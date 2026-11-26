// Palier 1 : entraînement — Le dernier musée consulté : l'affichage (vendredi matin).
// Un exercice complet : la logique d'abord (logic.js et ses tests), puis les trois fichiers.
// Quand les tests sont au vert :
// 3. index.html : ajoutez la classe dernier au paragraphe #resume : class="resume dernier".
// 4. style.css : à la fin, écrivez la classe .dernier : padding-left: 0.5rem; et
//    border-left: 4px solid #1f5fbf;
// 5. app.js, ligne A : last reçoit readLast(localStorage.getItem(KEY)), à la place de null.
// 6. app.js, lignes B, dans choose(museum) : last reçoit lastVisit(museum) ; puis enregistrez
//    last sous la clé KEY, avec localStorage.setItem et JSON.stringify.
// 7. Supprimez la ligne console.log qui suit les lignes import.
// Vérifiez dans le navigateur (Live Preview) : un clic sur « musée de Dinan » affiche
// « Dernier musée consulté : musée de Dinan (M0194) » ; rechargez la page : la phrase est toujours là.
import { MUSEUMS } from '../data/musees-bretagne.js';
import { lastVisit, readLast } from './logic.js';
console.log('À compléter :', lastVisit, readLast);

// One key per page: every page opened with Live Preview shares the same localStorage.
const KEY = 'j1c-dernier';

const summary = document.querySelector('#resume');
const list = document.querySelector('#liste');
const clearButton = document.querySelector('#vider');
const museums = MUSEUMS.filter((museum) => museum.Departement === "Côtes-d'Armor");

// Ligne A : remplacez null par le dernier musée enregistré.
let last = null;

// A click on a museum calls this function.
function choose(museum) {
  // Lignes B : gardez ce musée, puis enregistrez.
  showLast();
}

// Already written: the last museum, or a sentence if there is none.
function showLast() {
  if (last === null) {
    summary.textContent = 'Aucun musée consulté.';
  } else {
    summary.textContent = `Dernier musée consulté : ${last.name} (${last.id})`;
  }
}

// Already written: one button per museum. A click calls choose(museum).
for (const museum of museums) {
  const item = document.createElement('li');
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = `${museum.Nom_officiel} - ${museum.Ville}`;
  button.addEventListener('click', () => choose(museum));
  item.append(button);
  list.append(item);
}

// Already written: the button "Tout retirer".
clearButton.addEventListener('click', () => {
  localStorage.removeItem(KEY);
  last = null;
  showLast();
});

showLast();
