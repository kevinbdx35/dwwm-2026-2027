// Palier 1 : entraînement — Le code postal : l'affichage (jeudi matin). La ligne import est déjà écrite.
// Un exercice complet : la logique d'abord (logic.js et ses tests), puis les trois fichiers.
// Quand les tests sont au vert :
// 3. index.html : dans le formulaire, sous le bouton, ajoutez <p id="erreur" class="erreur"></p>.
// 4. style.css : à la fin, écrivez la classe .erreur : color: #b91c1c; et font-weight: 700;
// 5. app.js : écoutez l'événement submit du formulaire #recherche ; empêchez le rechargement
//    (event.preventDefault()) ;
// 6. app.js : message = checkPostcode(valeur du champ #code) ; écrivez-le dans #erreur ;
// 7. app.js : si le message est vide, écrivez « Code postal : … » dans #resultat ; sinon, videz-le.
// Vérifiez dans le navigateur : vide, « 2990 », puis « 29900 », avec le bouton et avec Entrée ;
// le message d'erreur est rouge et en gras.
import { checkPostcode } from './logic.js';
console.log(checkPostcode);
