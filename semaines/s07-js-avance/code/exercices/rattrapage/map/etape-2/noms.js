// Pas à pas : Les noms des musées (lundi après-midi)
// Lancez ce fichier avec : node noms.js
// Données : data.gouv.fr, Licence Ouverte (ministère de la Culture)

// Six noms de musées du Grand-Est (fréquentation 2019)
const names = [
  'musée Unterlinden',
  "écomusée d'Alsace",
  'musée Arthur Rimbaud',
  "musée de l'Ardenne",
  'musée du château-fort',
  'musée de la Renaissance en Champagne ',
];
// Affiche les données de départ
console.log(names);

// Fonction : met un nom en majuscules
function shout(name) {
  // return : renvoie le nom en majuscules
  return name.toUpperCase();
}

// Appel : on donne le premier nom, on lit le résultat
console.log(shout(names[0]));

// map : appelle shout sur chaque nom (callback)
const shouted = names.map(shout);
// Affiche le nouveau tableau
console.log(shouted);
