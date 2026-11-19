// Palier 1 : entraînement — L'affichage (mardi après-midi). Les lignes import sont déjà écrites.
// Un exercice complet : la logique d'abord (logic.js et ses tests), puis les trois fichiers.
// Quand les tests sont au vert :
// 3. index.html : sous le titre, ajoutez <p id="lieu">Lieu à remplacer</p>.
// 4. style.css : à la fin, écrivez la classe .discret : color: #5b616b; et font-size: 0.9rem;
// 5. app.js : écrivez cardTitle(museum) dans #titre ;
// 6. app.js : décomposez le musée : const { Code_postal, Departement } = museum;
//    puis écrivez « 29900, Finistère » dans #lieu, avec ces deux variables ;
// 7. app.js : ajoutez la classe discret au paragraphe #lieu (classList.add).
// Vérifiez dans le navigateur (Live Preview) : « musée de la pêche, à Concarneau », puis
// « 29900, Finistère » en gris et plus petit.
import { MUSEUMS } from '../data/musees-bretagne.js';
import { cardTitle } from './logic.js';

// The fourth museum of the file: musée de la pêche, Concarneau.
const museum = MUSEUMS[3];
console.log(museum, cardTitle);
