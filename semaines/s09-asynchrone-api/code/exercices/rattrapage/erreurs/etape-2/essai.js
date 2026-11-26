// Pas à pas — Un identifiant inconnu : un essai dans le terminal.
// Lancez-le depuis le dossier pas-a-pas-erreurs : node essai.js
import { checkId } from './logic.js';

console.log('Début');
console.log(checkId(' M0194 '));
// try : on essaie ; une erreur ici n'arrête plus tout
try {
  // Cette ligne lève l'erreur : la suivante est sautée
  console.log(checkId(''));
  // Jamais affiché : on est déjà parti dans catch
  console.log('Pas affiché');
} catch (error) {
  // catch attrape l'erreur ; error.message : son texte
  console.log(`Erreur attrapée : ${error.message}`);
}
console.log('Fin');
