// Palier 1 : entraînement — L'affichage (mardi après-midi). La ligne import est déjà écrite.
// Un exercice complet : la logique d'abord (logic.js et ses tests), puis les trois fichiers.
// Quand les tests sont au vert :
// 3. index.html : sous le bouton, ajoutez <p id="message" class="compte"></p>.
// 4. style.css : à la fin, écrivez la classe .compte : font-weight: 700; et color: #1f5fbf;
// 5. app.js : ajoutez async devant function show ; dans show, écrivez « Chargement... » dans #message ;
// 6. app.js : remplacez la ligne console.log : attendez countInCity('Rennes') avec await,
//    puis écrivez « 3 musées à Rennes » dans #message, avec le nombre reçu.
// Vérifiez dans le navigateur (Live Preview) : un clic affiche « Chargement... », puis
// « 3 musées à Rennes », en gras et en bleu.
import { countInCity } from './logic.js';

const button = document.querySelector('#charger');

function show() {
  console.log('À faire', countInCity);
}

button.addEventListener('click', show);
