// Palier 2 — Quand la réponse n'est pas ok : l'affichage (jeudi après-midi). La ligne import et showList sont déjà écrites.
// Vous écrivez deux fichiers sur trois : index.html et app.js (avec logic.js) ; style.css est fourni.
// index.html : sous le premier bouton, ajoutez un bouton <button type="button" id="absent">Charger un fichier absent</button>,
//   puis, sous le résumé, le paragraphe du message : <p id="message" class="message" hidden></p>.
// app.js : écrivez une fonction async load(url) :
//   - dans un try : attendez loadMuseums(url), cachez le message (hidden à true), appelez showList ;
//   - dans le catch : appelez showList([]), écrivez dans #message
//     « Les musées n'ont pas pu être chargés. » suivi du message de l'erreur, puis montrez le paragraphe.
// Un clic sur #charger appelle load('../data/musees-bretagne.json') ;
// un clic sur #absent appelle load('../data/fichier-absent.json').
// Vérifiez dans le navigateur (Live Preview) : le premier bouton affiche 34 musées ; le second affiche
// « Les musées n'ont pas pu être chargés. Réponse du serveur : 404 » et « 0 musées ».
import { loadMuseums } from './logic.js';

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

console.log('À écrire : load et les deux écouteurs', typeof loadMuseums, typeof showList);
