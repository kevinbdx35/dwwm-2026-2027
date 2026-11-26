// Palier 3 — finally et .catch : l'affichage (jeudi matin). Les lignes import sont déjà écrites.
// À l'envoi du formulaire : désactivez le bouton, attendez trackLoading(identifiant, state) dans un try,
// affichez « nom - ville », ou le message de l'erreur ; dans tous les cas, réactivez le bouton.
// Sous le résultat, affichez aussi la ville donnée par cityOrDefault(identifiant).
import { cityOrDefault, trackLoading } from './logic.js';

const form = document.querySelector('#formulaire');
const field = document.querySelector('#champ');
const errorText = document.querySelector('#erreur');
const result = document.querySelector('#resultat');
const state = { loading: false };
console.log(form, field, errorText, result, state, cityOrDefault, trackLoading);
