// Palier 1 — L'affichage (mardi après-midi). La ligne import est déjà écrite.
// Quand les tests sont au vert :
// 4. Ajoutez le mot async devant function show.
// 5. Dans show, remplacez la ligne console.log : attendez museumCity('M0194') avec await,
//    et rangez la ville dans une constante.
// 6. Écrivez dans le message : « Le musée M0194 est à Dinan », avec cette constante.
// Vérifiez dans le navigateur (Live Preview) : un clic sur « Charger » affiche « Chargement... »,
// puis « Le musée M0194 est à Dinan ».
import { museumCity } from './logic.js';

const button = document.querySelector('#charger');
const message = document.querySelector('#message');

function show() {
  message.textContent = 'Chargement...';
  console.log('À faire', museumCity);
}

button.addEventListener('click', show);
