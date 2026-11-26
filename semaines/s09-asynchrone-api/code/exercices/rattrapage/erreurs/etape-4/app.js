// Pas à pas — Un identifiant inconnu : l'affichage (jeudi matin).
// Les lignes import sont déjà écrites. La deuxième attend l'étape 4 : vous retirerez ses deux barres.
// Ouvrez la page avec Live Preview, jamais avec un double-clic.
import { loadMuseumOrFail } from '../data/museum-db.js';
import { checkId } from './logic.js';

const form = document.querySelector('#formulaire');
const field = document.querySelector('#champ');
const errorText = document.querySelector('#erreur');
const result = document.querySelector('#resultat');

// submit : le bouton, ou la touche Entrée
// async : la fonction contient un await
form.addEventListener('submit', async (event) => {
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
    // Le temps de la réponse : un message d'attente
    result.textContent = 'Recherche...';
    // await attend le musée ; promesse rompue : erreur levée
    const museum = await loadMuseumOrFail(id);
    // Trouvé : le nom et la ville
    result.textContent = `${museum.Nom_officiel} - ${museum.Ville}`;
  } catch (error) {
    // Le même catch pour les deux erreurs : on efface l'attente
    result.textContent = '';
    // Erreur attrapée : son message, dans la page
    errorText.textContent = error.message;
  }
});
