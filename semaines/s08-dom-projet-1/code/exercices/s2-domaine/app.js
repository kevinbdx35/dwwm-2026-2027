// Palier 2 — L'affichage (mardi matin). Les lignes import sont déjà écrites.
// Quand les tests sont au vert, affichez les musées qui ont le domaine 'Photographie' :
// 1. le résumé : « 8 musées avec de la photographie » ;
// 2. un <li> par musée : son nom, un tiret, sa ville.
// Vérifiez dans le navigateur : 8 lignes.
import { MUSEUMS } from '../data/musees-bretagne.js';
import { withDomain } from './logic.js';

console.log('Données chargées :', MUSEUMS.length, 'musées', withDomain);
