// Pas à pas : Ajouter sans modifier (vendredi matin)
// Lancez ce fichier avec : node copies.js
// Données : data.gouv.fr, Licence Ouverte (ministère de la Culture)

// Deux noms de musées
const names = ['musée Unterlinden', "écomusée d'Alsace"];
// Affiche les données de départ
console.log(names);

// Spread : ... recopie les éléments dans un NOUVEAU tableau
const copy = [...names];
// push ne touche que la copie
copy.push('musée Arthur Rimbaud');
// Affiche l'original, puis la copie
console.log(names, copy);

// Spread : un nouveau tableau, avec un nom en plus à la fin
const withNew = [...names, "musée de l'Ardenne"];
// L'original n'a pas changé
console.log(names, withNew);
