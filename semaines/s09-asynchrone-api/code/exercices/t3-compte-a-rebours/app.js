// Palier 2 — Le compte à rebours : l'affichage (lundi après-midi). Les lignes import sont déjà écrites.
// Vous écrivez deux fichiers sur trois : index.html et app.js (avec logic.js) ; style.css est fourni.
// 1. index.html : sous le bouton, ajoutez <p id="compteur" class="compteur" aria-live="polite"></p>.
// 2. Au clic sur le bouton (#action) : demandez les étapes à la logique, countdownSteps(3).
// 3. Programmez UN minuteur par étape : la première étape tout de suite (délai 0),
//    la deuxième après 1 seconde, la troisième après 2 secondes, et ainsi de suite.
//    Chaque minuteur écrit son étape dans #compteur.
// Vérifiez dans le navigateur (Live Preview) : un clic affiche « 3 », puis « 2 », puis « 1 »,
// puis « Ouvert ! », avec une seconde entre chaque.
import { countdownSteps } from './logic.js';

console.log('À faire', countdownSteps);
