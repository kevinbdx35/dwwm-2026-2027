// Pas à pas : Le total des visites (jeudi matin)
// Lancez ce fichier avec : node total.js
// Données : data.gouv.fr, Licence Ouverte (ministère de la Culture)

// Visites de trois musées des Ardennes en 2019
const visits = [3808, 29212, 51775];
// Affiche les données de départ
console.log(visits);

// reduce : additionne tout, en partant de 0
const total = visits.reduce((sum, n) => sum + n, 0);
// Une seule valeur : le total
console.log(total);

// Trace : affiche chaque tour de reduce
visits.reduce((sum, n) => {
  // sum : l'accumulateur, le résultat du tour d'avant
  console.log(sum, n);
  // Avec des accolades, il faut return
  return sum + n;
}, 0);

// Tableau d'objets : les mêmes musées, avec leur nom
const museums = [
  // Chaque élément : un objet { name, total }
  { name: 'musée du feutre', total: 3808 },
  { name: 'musée Arthur Rimbaud', total: 29212 },
  { name: "musée de l'Ardenne", total: 51775 },
];
// reduce : additionne le champ total de chaque objet
const all = museums.reduce((sum, item) => sum + item.total, 0);
// Le même total qu'à l'étape 1
console.log(all);

// reduce : garde le plus grand total vu jusqu'ici
const best = museums.reduce(
  // max : l'accumulateur ; item : le musée du tour
  (max, item) => Math.max(max, item.total),
  // Valeur de départ de l'accumulateur
  0,
);
// Le plus grand nombre de visites
console.log(best);
