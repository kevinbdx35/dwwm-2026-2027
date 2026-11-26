// Palier 1 : entraînement — Les musées visités : l'affichage (vendredi matin).
// Un exercice complet : la logique d'abord (logic.js et ses tests), puis les trois fichiers.
// Quand les tests sont au vert :
// 3. index.html : sous le résumé, ajoutez
//    <p id="conseil" class="conseil">Cliquez sur un musée que vous avez déjà visité.</p>
// 4. style.css : à la fin, écrivez la classe .conseil : color: #525860; et font-size: 0.9rem;
// 5. app.js, ligne A : visits reçoit readVisits(localStorage.getItem(KEY)), à la place de [].
// 6. app.js, lignes B, dans choose(id) : visits reçoit addVisit(visits, id) ; puis enregistrez
//    visits sous la clé KEY, avec localStorage.setItem et JSON.stringify.
// 7. Supprimez la ligne console.log qui suit les lignes import.
// Vérifiez dans le navigateur (Live Preview) : un clic sur deux musées, « 2 musée(s) visité(s) sur 10 » ;
// rechargez la page : le résumé et les deux coches sont toujours là.
import { MUSEUMS } from '../data/musees-bretagne.js';
import { addVisit, readVisits } from './logic.js';
console.log('À compléter :', addVisit, readVisits);

// One key per page: every page opened with Live Preview shares the same localStorage.
const KEY = 'j1b-visites';

const summary = document.querySelector('#resume');
const list = document.querySelector('#liste');
const clearButton = document.querySelector('#vider');
const museums = MUSEUMS.filter((museum) => museum.Departement === 'Morbihan');

// Ligne A : remplacez [] par les visites enregistrées.
let visits = [];

// A click on a museum calls this function.
function choose(id) {
  // Lignes B : ajoutez la visite, puis enregistrez.
  showPage();
}

// Already written: the summary, then one button per museum; a visited museum gets a check mark.
function showPage() {
  summary.textContent = `${visits.length} musée(s) visité(s) sur ${museums.length}`;
  list.textContent = '';
  for (const museum of museums) {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    const mark = visits.includes(museum.Identifiant) ? '✓ ' : '';
    button.textContent = `${mark}${museum.Nom_officiel} - ${museum.Ville}`;
    button.addEventListener('click', () => choose(museum.Identifiant));
    item.append(button);
    list.append(item);
  }
}

// Already written: the button "Tout retirer".
clearButton.addEventListener('click', () => {
  localStorage.removeItem(KEY);
  visits = [];
  showPage();
});

showPage();
