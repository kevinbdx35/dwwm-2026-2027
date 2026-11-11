// Pas à pas : Le palmarès des musées (jeudi après-midi)
// Lancez ce fichier avec : node palmares.js
// Données : data.gouv.fr, Licence Ouverte (ministère de la Culture)

// Visites de six musées du Grand-Est en 2019
const visits = [3165, 29212, 51775, 3808, 1207, 179932];
// Affiche les données de départ
console.log(visits);

// toSorted sans argument : trie comme des textes
const asText = visits.toSorted();
// Surprise : 179932 arrive juste après 1207
console.log(asText);

// Comparaison : a - b range du plus petit au plus grand
const ascending = visits.toSorted((a, b) => a - b);
// Affiche les visites dans l'ordre croissant
console.log(ascending);

// b - a : du plus grand au plus petit
const descending = visits.toSorted((a, b) => b - a);
// Affiche le palmarès des visites
console.log(descending);
// toSorted n'a pas modifié le tableau reçu
console.log(visits);

// Tableau d'objets : trois musées
const museums = [
  // Chaque élément : un objet { name, total }
  { name: 'musée Arthur Rimbaud', total: 29212 },
  { name: "écomusée d'Alsace", total: 179932 },
  { name: "musée de l'Ardenne", total: 51775 },
];
// Trie les objets selon leur champ total
const ranking = museums.toSorted((a, b) => b.total - a.total);
// map : les noms, du plus visité au moins visité
console.log(ranking.map((item) => item.name));
