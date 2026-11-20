// Pas à pas du mardi après-midi : la décomposition.
// Lancez : node decomposer.js (depuis pas-a-pas-decomposition)
// Deux musées, avec les noms de champs du fichier Muséofile.
const museum = {
  Identifiant: 'M0199',
  Nom_officiel: 'musée de la pêche',
  Ville: 'Concarneau',
  Departement: 'Finistère',
};
const other = {
  Identifiant: 'M0206',
  Nom_officiel: 'musée bigouden',
  Ville: "Pont-l'Abbé",
  Departement: 'Finistère',
};
console.log(museum.Nom_officiel, '/', other.Nom_officiel);

// Décomposition : deux variables en une ligne
const { Ville, Departement } = museum;
// Ville et Departement existent maintenant
console.log(Ville, Departement);

// Renommer : la clé Nom_officiel devient la variable name
const { Nom_officiel: name } = museum;
// name vaut 'musée de la pêche'
console.log(name);

// Dans les paramètres : la fonction reçoit un musée
function label({ Nom_officiel: title, Ville: city }) {
  // title et city viennent du musée reçu
  return `${title} - ${city}`;
}
// Le même appel qu'avant : on donne un musée entier
console.log(label(other));
