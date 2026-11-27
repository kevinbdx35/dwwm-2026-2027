// Palier 1 — Les noms des musées, avec fetch : l'affichage (consolidation de fetch).
// La page est fournie. La ligne import et showNames sont déjà écrites.
// Quand les tests sont au vert :
// 1. écrivez une fonction async start() ;
// 2. dedans, attendez loadNames('../../data/musees-bretagne.json') et rangez le résultat dans names ;
// 3. appelez showNames(names) ;
// 4. sous la fonction, lancez-la : start();
// Vérifiez dans le navigateur (Live Preview) : « 34 musées », puis 34 noms,
// le premier « musée de Dinan ».
import { loadNames } from './logic.js';

const summary = document.querySelector('#resume');
const list = document.querySelector('#liste');

// Already written: shows the names and the summary.
function showNames(names) {
  list.textContent = '';
  summary.textContent = `${names.length} musées`;
  for (const name of names) {
    const item = document.createElement('li');
    item.textContent = name;
    list.append(item);
  }
}

console.log('À écrire : start', typeof loadNames, typeof showNames);
