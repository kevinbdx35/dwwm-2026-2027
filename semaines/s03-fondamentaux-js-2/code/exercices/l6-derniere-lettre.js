// Lundi — Débogage 3 : la dernière lettre
// lastLetter(word) doit renvoyer la dernière lettre du mot : lastLetter('chat') → 't'.
// Si word n'est pas un texte, ou s'il est vide, elle doit renvoyer null.
// Ce code contient DEUX problèmes : un résultat faux, et une erreur quand word est absent.

export function lastLetter(word) {
  return word[word.length];
}
