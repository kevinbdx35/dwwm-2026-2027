// Palier 2 — Choisir un musée (lundi après-midi : les événements)
// 1. Pour chaque musée (for...of), créez un <li> et, dedans, un <button type="button">
//    dont le texte est le nom du musée ; ajoutez le bouton au <li>, puis le <li> à #liste.
// 2. Dans la boucle, posez sur CE bouton un écouteur click qui écrit dans #choix :
//    « Musée choisi : nom - ville ».
// 3. Le bouton #effacer remet le texte « Aucun musée choisi. ».
// Vérifiez dans le navigateur : chaque bouton affiche SON musée ; au clavier aussi
// (Tab jusqu'au bouton, puis Entrée).

const museums = [
  { name: 'musée des beaux-arts', city: 'Rennes' },
  { name: 'musée de Bretagne', city: 'Rennes' },
  { name: 'musée des beaux-arts', city: 'Quimper' },
  { name: 'musée départemental breton', city: 'Quimper' },
  { name: 'musée des beaux-arts', city: 'Vannes' },
  { name: "musée d'histoire et d'archéologie", city: 'Vannes' },
];
console.log(museums);
