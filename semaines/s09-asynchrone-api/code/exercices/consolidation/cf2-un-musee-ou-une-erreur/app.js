// Palier 2 — Un musée, ou une erreur : l'affichage (consolidation de fetch).
// La page est fournie : un résumé #resume, un message d'erreur #message (caché), une liste #liste.
// Écrivez ce fichier entier :
// - une fonction async start() qui, dans un try, attend
//   loadOneMuseum('../../data/musees-bretagne.json', 'M0199') et écrit dans #resume « nom - ville » ;
// - dans le catch : écrivez error.message dans #message, et affichez-le (hidden à false) ;
// - sous la fonction, lancez-la : start();
// Vérifiez dans le navigateur (Live Preview) : « musée de la pêche - Concarneau ».
// Puis essayez 'M9999' : le message rouge « Musée introuvable : M9999 ».
