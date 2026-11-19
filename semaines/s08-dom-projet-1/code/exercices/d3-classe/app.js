// Palier 2 — Mettre en valeur (lundi matin : le DOM). Vous écrivez deux fichiers : style.css et app.js.
// 1. style.css : écrivez la classe .important : du gras, une bordure gauche de 4px, pleine, bleue (#1f5fbf),
//    et 0.5rem d'espace intérieur à gauche.
// 2. app.js : pour chaque musée (for...of), créez un <li> avec le texte « nom — ville ».
// 3. app.js : ajoutez chaque <li> au <ul id="liste">.
// 4. app.js : si la ville est 'Rennes', ajoutez au <li> la classe important (classList.add).
// Vérifiez dans le navigateur : les trois musées de Rennes sont en gras, avec une barre bleue.

const museums = [
  { name: 'écomusée de la Bintinais', city: 'Rennes' },
  { name: 'musée des rochers de Sévigné', city: 'Vitré' },
  { name: 'musée des beaux-arts', city: 'Rennes' },
  { name: 'musée du château', city: 'Vitré' },
  { name: 'musée de Bretagne', city: 'Rennes' },
];
console.log(museums);
