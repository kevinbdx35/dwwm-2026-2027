// Palier 1 : entraînement — L'affichage (mardi après-midi). La ligne import est déjà écrite.
// Un exercice complet : la logique d'abord (logic.js et ses tests), puis les trois fichiers.
// Quand les tests sont au vert :
// 3. index.html : sous le paragraphe, ajoutez <ul id="liste" class="liste-bleue"></ul>.
// 4. style.css : à la fin, écrivez la classe .liste-bleue : color: #1f5fbf;
// 5. app.js : ajoutez async devant function show ; dans show, remplacez la ligne console.log :
//    attendez namesInCity('Quimper') avec await ;
// 6. app.js : écrivez « 2 musées à Quimper » dans #message, puis ajoutez à #liste un <li> par nom.
// Vérifiez dans le navigateur (Live Preview) : un clic affiche « Chargement... », puis
// « 2 musées à Quimper » et deux lignes bleues, la première « musée des beaux-arts ».
import { namesInCity } from './logic.js';

const button = document.querySelector('#charger');
const message = document.querySelector('#message');

function show() {
  message.textContent = 'Chargement...';
  console.log('À faire', namesInCity);
}

button.addEventListener('click', show);
