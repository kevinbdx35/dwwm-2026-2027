// Essai de la logique, sans navigateur : node essai.js (depuis pas-a-pas-logique)
import { MUSEUMS } from '../data/musees-bretagne.js';
import { museumLabel, inDepartment } from './logic.js';

// L'étiquette du premier musée du fichier
console.log(museumLabel(MUSEUMS[0]));
// Le nombre de musées du Morbihan
console.log(inDepartment(MUSEUMS, 'Morbihan').length);
