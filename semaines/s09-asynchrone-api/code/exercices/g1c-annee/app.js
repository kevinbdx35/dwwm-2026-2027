// Palier 1 : entraînement — L'année d'ouverture : l'affichage (jeudi matin). La ligne import est déjà écrite.
// La page (index.html, style.css) est fournie : n'y touchez pas.
// Quand les tests sont au vert, complétez l'écouteur submit, à l'endroit indiqué :
// 1. try : value = parseYear(field.value), puis écrivez « Année d'ouverture : 1985 » dans result ;
// 2. catch (error) : écrivez error.message dans errorText.
// Vérifiez dans le navigateur : « 1985 », puis rien, « abc » et « 2050 ».
import { parseYear } from './logic.js';

const form = document.querySelector('#formulaire');
const field = document.querySelector('#champ');
const errorText = document.querySelector('#erreur');
const result = document.querySelector('#resultat');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  errorText.textContent = '';
  // Et l'ancien résultat
  result.textContent = '';
  // TODO: write the try / catch here.
  console.log(parseYear, field.value);
});
