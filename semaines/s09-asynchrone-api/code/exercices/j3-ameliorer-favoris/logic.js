/* eslint-disable no-var, eqeqeq */
// Palier 3 — Améliorer la page des favoris : la logique (vendredi matin)
// Ce code MARCHE : ne changez pas ce qu'il fait. Il est mal écrit : améliorez-le.
// La consigne complète est en haut d'app.js. À la fin, supprimez la première ligne de ce fichier
// (eslint-disable) : ESLint ne doit plus rien souligner.
// Lancez les tests : node --test j3-ameliorer-favoris.defi.test.js

export function toggleFavorite(a, b) {
  var tmp = [];
  var found = false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] == b) {
      found = true;
    } else {
      tmp.push(a[i]);
    }
  }
  if (found == false) {
    tmp.push(b);
  }
  return tmp;
}
