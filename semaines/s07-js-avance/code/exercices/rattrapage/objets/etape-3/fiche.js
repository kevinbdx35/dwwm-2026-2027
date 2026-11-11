// Pas à pas : La fiche d'un musée (mardi après-midi)
// Lancez ce fichier avec : node fiche.js
// Données : data.gouv.fr, Licence Ouverte (ministère de la Culture)

// Objet : les informations d'un même musée
const museum = {
  // Propriété : la clé name, puis sa valeur
  name: 'musée Unterlinden',
  // Propriété : la ville
  city: 'COLMAR',
  // Propriété : les visites de 2019
  total: 165484,
};
// Affiche tout l'objet
console.log(museum);

// Le point lit une propriété : objet.clé
console.log(museum.name);
// La ville du musée
console.log(museum.city);
// Une clé qui n'existe pas donne undefined
console.log(museum.country);

// Affectation : change la valeur d'une propriété
museum.total = 170000;
// Nouvelle clé : la propriété est ajoutée
museum.department = 'Haut-Rhin';
// Affiche tout l'objet
console.log(museum);
