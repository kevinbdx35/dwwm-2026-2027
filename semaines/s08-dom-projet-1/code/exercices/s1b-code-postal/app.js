// Palier 1 : entraînement — L'affichage (mardi matin). Les lignes import sont déjà écrites.
// Un exercice complet : la logique d'abord (logic.js et ses tests), puis les trois fichiers.
// Quand les tests sont au vert :
// 3. index.html : au-dessus de la liste, ajoutez <p id="resume" class="resume"></p>.
// 4. style.css : à la fin, écrivez la classe .resume : font-weight: 700; et color: #1f5fbf;
// 5. app.js : dans #resume, écrivez « 34 musées » avec MUSEUMS.length ;
// 6. app.js : pour chaque musée, ajoutez à #liste un <li> qui contient postalLabel(museum).
// Vérifiez dans le navigateur (Live Preview) : « 34 musées » en gras et en bleu, puis 34 lignes,
// la première « 22100 Dinan ».
import { MUSEUMS } from '../data/musees-bretagne.js';
import { postalLabel } from './logic.js';
console.log('Données chargées :', MUSEUMS.length, 'musées', postalLabel);
