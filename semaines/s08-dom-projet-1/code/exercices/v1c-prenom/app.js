// Palier 1 : entraînement — Signer le livre d'or : l'affichage (jeudi matin). La ligne import est déjà écrite.
// Un exercice complet : la logique d'abord (logic.js et ses tests), puis les trois fichiers.
// Quand les tests sont au vert :
// 3. index.html : dans le formulaire, au-dessus du bouton, ajoutez le label et son champ :
//    <label for="prenom">Votre prénom</label>
//    <input id="prenom" name="prenom" type="text" aria-describedby="erreur">
// 4. style.css : à la fin, écrivez la classe .merci : color: #166534; et font-weight: 700;
// 5. app.js : écoutez l'événement submit du formulaire #livre ; empêchez le rechargement
//    (event.preventDefault()) ;
// 6. app.js : message = checkFirstName(valeur du champ #prenom) ; écrivez-le dans #erreur ;
// 7. app.js : si le message est vide, écrivez « Merci, … ! » dans #merci, avec le prénom sans
//    espaces autour ; sinon, videz #merci.
// Vérifiez dans le navigateur : vide, puis « Lou », avec le bouton et avec Entrée ;
// « Merci, Lou ! » est vert et en gras.
import { checkFirstName } from './logic.js';
console.log(checkFirstName);
