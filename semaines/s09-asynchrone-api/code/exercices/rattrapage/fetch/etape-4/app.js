// Pas à pas — Les musées, depuis un fichier, puis depuis l'API (jeudi après-midi).
// La ligne import et la fonction showList sont déjà écrites : ne les modifiez pas.
// Ouvrez la page avec Live Preview, jamais par un double-clic.
import { buildMuseumsUrl } from './api.js';

const summary = document.querySelector('#resume');
const list = document.querySelector('#liste');

// Already written: shows the museums and the summary.
function showList(museums) {
  list.textContent = '';
  summary.textContent = `${museums.length} musées`;
  for (const museum of museums) {
    const item = document.createElement('li');
    item.textContent = `${museum.Nom_officiel} - ${museum.Ville}`;
    list.append(item);
  }
}

// Before the data arrives: an empty list.
showList([]);
// The address of the real API, used at step 4.
console.log('Adresse de l\'API :', buildMuseumsUrl());

// Étapes 1 à 4 : écrivez votre code sous cette ligne.
// async : cette fonction peut attendre (await)
async function start() {
  // try : on essaie ; une erreur fait sauter au catch
  try {
    // fetch demande l'adresse ; await attend la réponse
    const response = await fetch(buildMuseumsUrl());
    // status : le code de statut ; ok : true de 200 à 299
    console.log(response.status, response.ok);
    // Pas ok (404, 500...) : on lève une erreur
    if (!response.ok) {
      // Le message de l'erreur contient le statut
      throw new Error(`Réponse du serveur : ${response.status}`);
    }
    // json() transforme la réponse en objets JavaScript
    const result = await response.json();
    // data : le tableau des musées, dans la réponse
    showList(result.data);
  } catch (error) {
    // Le paragraphe du message, caché au départ
    const message = document.querySelector('#message');
    // Le message pour le visiteur, avec la cause
    message.textContent = `Chargement impossible. ${error.message}`;
    // hidden à false : le paragraphe devient visible
    message.hidden = false;
  }
}
// On lance la fonction
start();
