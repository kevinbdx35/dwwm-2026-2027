// Project #1 — loading the museums: the request and the four states. No document here.
// Copy this file at the root of your project (explorateur-musees), next to logic.js.
// Tested by projet-1-etats.test.js (node --test projet-1-etats.test.js).

// US-4 — loadMuseums(url) demande les musées à cette adresse et renvoie une promesse du tableau
// des musées : le tableau « data » de la réponse. Si la réponse n'est pas ok (404, 500...),
// elle lève une erreur dont le message contient le code de statut.
// (Écrite avec le groupe, pendant le pas à pas.)
export async function loadMuseums(url) {
  // TODO: replace the line below with your code.
  return [];
}

// US-5 — stateMessage(state) renvoie le message à afficher pour cet état :
//   'loading' : 'Chargement des musées...'
//   'error'   : 'Impossible de charger les musées. Vérifiez votre connexion, puis réessayez.'
//   'empty'   : 'Aucun musée à afficher.'
//   'success' : '' (rien à dire : la liste s'affiche)
export function stateMessage(state) {
  // TODO: replace the line below with your code.
  return 'À faire';
}

// Palier 3 — loadMuseumsWithBackup(url, backupUrl) essaie d'abord url ; si ce chargement échoue,
// elle charge backupUrl. Elle renvoie une promesse d'un objet { museums, source } :
// source vaut 'api' ou 'backup'. Si les deux chargements échouent, l'erreur n'est pas attrapée.
export async function loadMuseumsWithBackup(url, backupUrl) {
  // TODO: replace the line below with your code.
  return { museums: [], source: '' };
}
