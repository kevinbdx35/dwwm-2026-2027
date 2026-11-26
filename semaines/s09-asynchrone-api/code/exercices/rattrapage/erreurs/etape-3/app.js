// Pas à pas — Un identifiant inconnu : l'affichage (jeudi matin).
// Les lignes import sont déjà écrites. La deuxième attend l'étape 4 : vous retirerez ses deux barres.
// Ouvrez la page avec Live Preview, jamais avec un double-clic.
// import { loadMuseumOrFail } from '../data/museum-db.js';
import { checkId } from './logic.js';

const form = document.querySelector('#formulaire');
const field = document.querySelector('#champ');
const errorText = document.querySelector('#erreur');
const result = document.querySelector('#resultat');

// submit : le bouton, ou la touche Entrée
form.addEventListener('submit', (event) => {
  // La page ne se recharge pas
  event.preventDefault();
  // On efface les anciens messages
  errorText.textContent = '';
  // Et l'ancien résultat
  result.textContent = '';
  // try : une erreur levée ici saute au catch
  try {
    // La logique vérifie : elle peut lever une erreur
    const id = checkId(field.value);
    // Pas d'erreur : on affiche l'identifiant
    result.textContent = `Identifiant valide : ${id}`;
  } catch (error) {
    // Erreur attrapée : son message, dans la page
    errorText.textContent = error.message;
  }
});
