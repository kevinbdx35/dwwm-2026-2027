// Palier 1 : entraînement — L'affichage (mardi matin). Les lignes import sont déjà écrites.
// Un exercice complet : la logique d'abord (logic.js et ses tests), puis les trois fichiers.
// Quand les tests sont au vert :
// 3. index.html : sous le résumé, ajoutez <ul id="liste" class="liste-bleue"></ul>.
// 4. style.css : à la fin, écrivez la classe .liste-bleue : color: #1f5fbf;
// 5. app.js : dans #resume, écrivez « 34 identifiants » avec MUSEUMS.length ;
// 6. app.js : pour chaque musée, ajoutez à #liste un <li> qui contient idLabel(museum).
// Vérifiez dans le navigateur (Live Preview) : « 34 identifiants », puis 34 lignes bleues,
// la première « musée de Dinan (M0194) ».
import { MUSEUMS } from '../data/musees-bretagne.js';
import { idLabel } from './logic.js';
console.log('Données chargées :', MUSEUMS.length, 'musées', idLabel);
