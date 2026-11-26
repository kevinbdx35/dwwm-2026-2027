// Palier 2 — L'affichage (mardi après-midi). La ligne import est déjà écrite.
// Vous écrivez deux fichiers sur trois : index.html et app.js (avec logic.js) ; style.css est fourni.
// index.html : dans <main>, sous le titre, un bouton « Comparer » (id charger, type button),
//              puis un paragraphe vide (id message, classe message).
// app.js : au clic sur le bouton, écrivez « Chargement... » dans le message ; attendez
//          sameDepartment('M0199', 'M0207') ; puis écrivez « M0199 et M0207 : même département »
//          si le résultat est true, « M0199 et M0207 : deux départements » sinon.
// Vérifiez dans le navigateur (Live Preview), puis essayez avec 'M0194' et 'M0199'.
import { sameDepartment } from './logic.js';

console.log('À faire', sameDepartment);
