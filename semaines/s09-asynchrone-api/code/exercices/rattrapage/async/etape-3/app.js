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

// async : cette fonction a le droit d'attendre
async function showCities() {
  // On vide la liste avant de la remplir
  list.textContent = '';
  // Première attente : la ville du musée M0199
  const first = await cityOf('M0199');
  // Une ligne de plus dans la liste
  addLine(`Le musée M0199 est à ${first}`);
  // Deuxième attente : elle commence après la première
  const second = await cityOf('M0207');
  // Une deuxième ligne, un instant plus tard
  addLine(`Le musée M0207 est à ${second}`);
}

button.addEventListener('click', showMuseum);
button.addEventListener('click', showCities);
