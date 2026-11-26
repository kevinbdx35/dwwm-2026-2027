// Palier 2 — L'affichage (mardi après-midi). La ligne import est déjà écrite.
// La fonction show marche : elle est écrite avec then. Réécrivez-la avec async et await.
// Vérifiez dans le navigateur (Live Preview) : un clic affiche « Chargement... », puis
// « musée de Dinan - Dinan », puis une ligne « Concarneau et Quimper » : comme avant.
import { museumLabel, twoCities } from './logic.js';

const button = document.querySelector('#charger');
const message = document.querySelector('#message');
const list = document.querySelector('#liste');

function show() {
  message.textContent = 'Chargement...';
  list.textContent = '';
  museumLabel('M0194').then((label) => {
    message.textContent = label;
    twoCities('M0199', 'M0207').then((cities) => {
      const item = document.createElement('li');
      item.textContent = cities;
      list.append(item);
    });
  });
}

button.addEventListener('click', show);
