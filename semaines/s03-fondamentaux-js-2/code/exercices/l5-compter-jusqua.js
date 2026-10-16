// Lundi — Débogage 2 : compter jusqu'à n
// countTo(n) doit renvoyer le tableau [1, 2, …, n]. Exemple : countTo(3) → [1, 2, 3].
// Ce code contient un bug : il n'y a pas de message d'erreur, mais le résultat est faux.
// Isolez le problème avec un console.log dans la boucle, puis corrigez.

export function countTo(n) {
  const numbers = [];
  for (let i = 1; i < n; i++) {
    numbers.push(i);
  }
  return numbers;
}
