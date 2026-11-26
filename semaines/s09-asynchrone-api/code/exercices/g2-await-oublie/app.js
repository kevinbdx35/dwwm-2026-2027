// Palier 2 — L'await oublié : l'affichage (jeudi matin). Ce fichier est déjà écrit : ne le modifiez pas.
// Le bug est dans logic.js. Vérifiez dans le navigateur, avant et après la correction : « M0194 », puis « M9999 ».
import { museumLabelOrMessage } from './logic.js';

const form = document.querySelector('#formulaire');
const field = document.querySelector('#champ');
const errorText = document.querySelector('#erreur');
const result = document.querySelector('#resultat');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  errorText.textContent = '';
  result.textContent = 'Recherche...';
  result.textContent = await museumLabelOrMessage(field.value.trim());
});
