// Palier 1 — Le champ obligatoire : l'affichage (jeudi matin). Les lignes import sont déjà écrites.
// Quand les tests sont au vert, écoutez l'événement submit du formulaire :
// 1. empêchez le rechargement de la page (event.preventDefault()) ;
// 2. message = checkQuery(valeur du champ) ; écrivez-le dans le <p id="erreur"> ;
// 3. si le message est vide, écrivez « Recherche : … » dans le <p id="resultat"> ; sinon, videz-le.
// Vérifiez dans le navigateur : vide, « a », puis « Brest », avec le bouton et avec Entrée.
import { checkQuery } from './logic.js';

const form = document.querySelector('#recherche');
const field = document.querySelector('#requete');
const error = document.querySelector('#erreur');
const result = document.querySelector('#resultat');
console.log(form, field, error, result, checkQuery);
