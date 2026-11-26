// Pas à pas — Un identifiant inconnu : la logique (jeudi matin)
// checkId(text) renvoie l'identifiant d'un musée, sans espaces autour.
// Une saisie invalide lève une erreur : throw new Error('message').

export function checkId(text) {
  // trim : le texte du champ, sans espaces autour
  const id = text.trim();
  // Champ vide : on lève une erreur, avec son message
  if (id === '') {
    // throw : la fonction s'arrête, l'erreur part
    throw new Error('Tapez un identifiant, par exemple M0194.');
  }
  // Mauvaise longueur : une autre erreur
  if (id.length !== 5) {
    // throw : la fonction s'arrête ici aussi
    throw new Error('Un identifiant a 5 caractères.');
  }
  // Tout va bien : on renvoie l'identifiant
  return id;
}
