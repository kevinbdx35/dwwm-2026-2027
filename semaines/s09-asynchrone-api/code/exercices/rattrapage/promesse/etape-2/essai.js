// Essai de la logique, sans navigateur : node essai.js (depuis pas-a-pas-promesse)
import { cityMuseumNames } from './logic.js';

// then : quand la promesse est tenue, on affiche sa valeur dans le terminal
cityMuseumNames('M0207').then((names) => console.log(names));
