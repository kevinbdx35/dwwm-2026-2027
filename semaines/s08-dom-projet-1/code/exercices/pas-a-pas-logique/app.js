// L'affichage : il lit et écrit dans la page. Il se vérifie dans le navigateur.
// Les deux lignes import sont déjà écrites : elles apportent les données et les fonctions
// de logic.js (les modules sont expliqués en semaine 10). Ouvrez la page avec Live Preview.
import { MUSEUMS } from '../data/musees-bretagne.js';
import { museumLabel, inDepartment } from './logic.js';

console.log('Données chargées :', MUSEUMS.length, 'musées', museumLabel, inDepartment);
