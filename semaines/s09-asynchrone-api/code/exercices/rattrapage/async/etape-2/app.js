// Pas à pas — La même page, sans then (mardi après-midi). Les lignes import sont déjà écrites.
// Cette page marche : elle est écrite avec then, comme hier.
// Avec le groupe, vous la réécrivez avec async et await, une étape à la fois.
import { loadMuseum } from '../data/museum-db.js';
import { cityOf } from './logic.js';

const button = document.querySelector('#charger');
const message = document.querySelector('#message');
const list = document.querySelector('#liste');

// Déjà écrite : ajoute une ligne à la liste.
function addLine(text) {
  const item = document.createElement('li');
  item.textContent = text;
  list.append(item);
}

// async : cette fonction a le droit d'attendre
async function showMuseum() {
  // Affiché tout de suite, avant la réponse
  message.textContent = 'Chargement...';
  // await : la fonction attend ici le musée
  const museum = await loadMuseum('M0194');
  // La suite s'exécute quand le musée est arrivé
  message.textContent = `${museum.Nom_officiel} - ${museum.Ville}`;
}

// Étape 3 : à réécrire avec async et await, puis à compléter.
function showCities() {
  list.textContent = '';
  cityOf('M0199').then((city) => {
    addLine(`Le musée M0199 est à ${city}`);
  });
}

button.addEventListener('click', showMuseum);
button.addEventListener('click', showCities);
