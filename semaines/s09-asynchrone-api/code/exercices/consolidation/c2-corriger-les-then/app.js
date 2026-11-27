// Palier 2 — Corriger : l'affichage (consolidation des promesses). Une des trois erreurs est ici.
// La page est fournie : index.html et style.css ne changent pas.
// Vous devez voir, après un clic : « Chargement... », puis « musée de Dinan (Dinan) ».
// Aujourd'hui, la page affiche [object Promise] : corrigez.
import { cityLabelLater } from './logic.js';

const button = document.querySelector('#charger');
const status = document.querySelector('#etat');

button.addEventListener('click', () => {
  status.textContent = 'Chargement...';
  status.textContent = cityLabelLater('M0194');
});
