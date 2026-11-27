// Palier 1 : entraînement — L'affichage (consolidation de fetch). La page est fournie,
// et ce fichier est déjà écrit : il n'y a rien à y changer.
// Quand les tests sont au vert, vérifiez dans le navigateur (Live Preview) : « 34 musées ».
// Puis changez le nom du fichier dans l'adresse (musees-absent.json) : le message rouge
// « Réponse du serveur : 404 » s'affiche. Remettez le bon nom.
import { countMuseums } from './logic.js';

const summary = document.querySelector('#resume');
const message = document.querySelector('#message');

async function start() {
  try {
    const count = await countMuseums('../../data/musees-bretagne.json');
    summary.textContent = `${count} musées`;
  } catch (error) {
    message.textContent = error.message;
    message.hidden = false;
  }
}

start();
