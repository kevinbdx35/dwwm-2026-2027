// Palier 1 — Charger les musées : l'affichage (jeudi après-midi). La ligne import et showList sont déjà écrites.
// Quand les tests sont au vert :
// 4. écrivez une fonction async start() ;
// 5. dedans, attendez loadMuseums('../data/musees-bretagne.json') et rangez le résultat dans museums ;
// 6. appelez showList(museums) ;
// 7. sous la fonction, lancez-la : start();
// Vérifiez dans le navigateur (Live Preview) : « 34 musées », puis 34 lignes,
// la première « musée de Dinan - Dinan ».
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

console.log('À écrire : start', typeof loadMuseums, typeof showList);
