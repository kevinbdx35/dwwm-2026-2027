// Palier 2 — Proposer un musée : l'affichage (jeudi matin). La ligne import est déjà écrite.
// Vous écrivez deux fichiers : index.html (les champs du formulaire) et app.js (logic.js en plus).
// 1. index.html : dans le formulaire, au-dessus du bouton, écrivez trois champs de type text, chacun
//    avec son <label> relié par for : « Nom du musée » (id nom), « Code postal » (id code-postal),
//    « Ville » (id ville). Comme dans R3, hier.
// Quand les tests sont au vert, à l'envoi du formulaire (submit, sans rechargement) :
// 2. construisez l'objet { name, postcode, city } à partir des trois champs ;
// 3. videz la liste #erreurs, puis ajoutez un <li> par message de checkProposal ;
// 4. aucun message : écrivez « Merci, votre proposition est enregistrée. » dans #merci.
// Vérifiez dans le navigateur : tout vide (3 messages), puis un code postal « 2990 » (1 message),
// puis une proposition valide (le merci).
import { checkProposal } from './logic.js';

const form = document.querySelector('#proposition');
console.log(form, checkProposal);
