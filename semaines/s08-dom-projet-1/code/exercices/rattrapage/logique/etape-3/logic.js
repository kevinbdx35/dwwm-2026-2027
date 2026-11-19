// La logique : elle calcule, elle ne touche jamais à la page (aucun document ici).
// Les deux fonctions sont déjà déclarées : vous écrivez leur contenu, étape par étape.

export function museumLabel(museum) {
  // Le nom, un tiret, la ville : un texte, sans document
  return `${museum.Nom_officiel} — ${museum.Ville}`;
}

export function inDepartment(museums, department) {
  // filter : garde les musées de ce département
  return museums.filter((item) => item.Departement === department);
}
