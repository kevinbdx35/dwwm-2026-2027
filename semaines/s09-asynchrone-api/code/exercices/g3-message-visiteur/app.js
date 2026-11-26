// Palier 2 — Un message pour le visiteur : l'affichage (jeudi matin). Les lignes import sont déjà écrites.
// Quand les tests sont au vert, écoutez l'événement submit du formulaire (fonction async) :
// 1. empêchez le rechargement de la page ; videz errorText ; écrivez « Recherche... » dans result ;
// 2. try : city = await findCity(field.value), puis « Ce musée est à Dinan. » dans result ;
// 3. catch (error) : videz result, puis écrivez « Désolé. » suivi d'une espace et de error.message dans errorText.
// Vérifiez dans le navigateur : « M0194 », puis rien, puis « M9999 ».
import { findCity } from './logic.js';

const form = document.querySelector('#formulaire');
const field = document.querySelector('#champ');
const errorText = document.querySelector('#erreur');
const result = document.querySelector('#resultat');
console.log(form, field, errorText, result, findCity);
