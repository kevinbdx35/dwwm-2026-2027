// Palier 1 : entraînement — Les villes des musées : l'affichage (jeudi après-midi). La ligne import est déjà écrite.
// Un exercice complet : la logique d'abord (logic.js et ses tests), puis les trois fichiers.
// Quand les tests sont au vert :
// 4. index.html : ajoutez la classe resume au paragraphe d'id resume : <p id="resume" class="resume"></p>.
// 5. style.css : à la fin, écrivez la classe .resume : font-weight: 700; et color: #1f5fbf;
// 6. app.js : écrivez une fonction async start() qui attend loadCities('../data/musees-bretagne.json') ;
// 7. app.js : dans #resume, écrivez « 34 villes » avec la longueur du tableau ;
// 8. app.js : pour chaque ville (for...of), ajoutez à #liste un <li> qui contient la ville ; puis lancez start().
// Vérifiez dans le navigateur (Live Preview) : « 34 villes » en gras et en bleu, puis 34 lignes,
// la première « Dinan ».
import { loadCities } from './logic.js';

console.log('À écrire : start', typeof loadCities);
