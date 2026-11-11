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
