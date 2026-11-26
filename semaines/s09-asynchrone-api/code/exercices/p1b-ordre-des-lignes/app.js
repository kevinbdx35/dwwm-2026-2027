// Palier 1 : entraînement — L'affichage (mardi matin). La page est fournie.
// Ce fichier est complet : ne le modifiez pas. Lisez-le : au clic, il écrit « Chargement... »,
// demande le nom en majuscules à la logique, puis l'écrit à son arrivée.
// Vérifiez dans le navigateur (Live Preview), quand les tests sont au vert :
// un clic affiche « Chargement... », puis « MUSÉE DE LA PÊCHE ».
import { upperNameLater } from './logic.js';

const button = document.querySelector('#charger');
const status = document.querySelector('#etat');

button.addEventListener('click', () => {
  status.textContent = 'Chargement...';
  upperNameLater('M0199').then((name) => {
    status.textContent = name;
  });
});
