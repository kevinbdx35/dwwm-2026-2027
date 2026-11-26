// Essai de la logique, sans navigateur : node essai.js (depuis pas-a-pas-async)
import { cityOf } from './logic.js';

// cityOf renvoie une promesse : then affiche la ville quand elle arrive
cityOf('M0199').then((city) => console.log(city));
