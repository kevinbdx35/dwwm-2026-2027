// Palier 1 : entraînement — L'affichage (consolidation de fetch). La page est fournie.
// La ligne import et showList sont déjà écrites.
// Quand les tests sont au vert :
// 1. écrivez une fonction async start() ;
// 2. dedans, attendez loadDepartment('../../data/musees-bretagne.json', 'Morbihan') et rangez le résultat dans museums ;
// 3. appelez showList(museums) ;
// 4. sous la fonction, lancez-la : start();
// Vérifiez dans le navigateur (Live Preview) : « 10 musées », puis 10 lignes,
// la première « musée des beaux-arts - Vannes ».
import { loadDepartment } from './logic.js';

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

console.log('À écrire : start', typeof loadDepartment, typeof showList);
