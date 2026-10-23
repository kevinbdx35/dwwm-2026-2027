// Lundi (si le temps le permet) — Inspecteur réseau 1 : la famille d'un code HTTP
// statusCategory(code) renvoie la famille d'un code de réponse HTTP :
//   100 à 199 → 'information' ; 200 à 299 → 'succès' ; 300 à 399 → 'redirection' ;
//   400 à 499 → 'erreur client' ; 500 à 599 → 'erreur serveur' ; sinon → null.
// Exemples : statusCategory(200) → 'succès' ; statusCategory(404) → 'erreur client'.

export function statusCategory(code) {
  // TODO: replace the line below with your code.
  return `À faire (${code})`;
}
