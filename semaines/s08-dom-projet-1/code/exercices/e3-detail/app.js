// Palier 2 — Le détail d'un musée : l'affichage (mardi matin). Les lignes import sont déjà écrites.
// Vous écrivez deux fichiers : index.html (la zone de détail) et app.js (la boucle).
// 1. index.html : sous la liste, écrivez la zone de détail : une <section id="detail" aria-live="polite">
//    qui contient un paragraphe « Choisissez un musée pour voir son détail. ».
//    (aria-live="polite" : un lecteur d'écran annonce le détail quand il change.)
// showDetail(id) est déjà écrite : elle affiche le nom, la ville et les domaines d'un musée dans #detail.
// Quand les tests sont au vert, complétez la boucle : pour chaque musée du Morbihan,
// 2. créez un <li> et, dedans, un <button type="button"> dont le texte est le nom du musée ;
// 3. ajoutez au bouton un écouteur 'click' qui appelle showDetail(museum.Identifiant) ;
// 4. ajoutez le bouton au <li>, puis le <li> à la liste.
// Vérifiez dans le navigateur : un clic sur un musée affiche son détail ; au clavier aussi.
import { MUSEUMS } from '../data/musees-bretagne.js';
import { findMuseum } from './logic.js';

const detail = document.querySelector('#detail');

function showDetail(id) {
  const museum = findMuseum(MUSEUMS, id);
  detail.textContent = '';
  const title = document.createElement('h2');
  title.textContent = museum.Nom_officiel;
  const place = document.createElement('p');
  place.textContent = `Ville : ${museum.Ville}`;
  const domains = document.createElement('p');
  domains.textContent = `Domaines : ${museum.Domaine_thematique.split(';').join(', ')}`;
  detail.append(title, place, domains);
}

const list = document.querySelector('#liste');
const morbihan = MUSEUMS.filter((museum) => museum.Departement === 'Morbihan');
for (const museum of morbihan) {
  // TODO : le <li>, le <button>, son écouteur.
  console.log(museum.Nom_officiel, list, showDetail);
}
