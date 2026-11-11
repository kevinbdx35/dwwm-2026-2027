// Pas à pas : Les grands musées (mardi matin)
// Lancez ce fichier avec : node visites.js
// Données : data.gouv.fr, Licence Ouverte (ministère de la Culture)

// Visites de huit musées du Grand-Est en 2019
const visits = [3165, 29212, 51775, 3808, 1207, 59853, 165484, 179932];
// Affiche les données de départ
console.log(visits);

// filter : garde les musées d'au moins 50 000 visites
const bigOnes = visits.filter((total) => total >= 50000);
// Affiche le nouveau tableau
console.log(bigOnes);
