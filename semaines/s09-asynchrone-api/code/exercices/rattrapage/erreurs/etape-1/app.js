// Pas à pas — Un identifiant inconnu : l'affichage (jeudi matin).
// Les lignes import sont déjà écrites. La deuxième attend l'étape 4 : vous retirerez ses deux barres.
// Ouvrez la page avec Live Preview, jamais avec un double-clic.
// import { loadMuseumOrFail } from '../data/museum-db.js';
import { checkId } from './logic.js';

const form = document.querySelector('#formulaire');
const field = document.querySelector('#champ');
const errorText = document.querySelector('#erreur');
const result = document.querySelector('#resultat');
console.log(form, field, errorText, result, checkId);
