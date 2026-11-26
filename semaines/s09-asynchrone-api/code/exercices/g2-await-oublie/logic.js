// Palier 2 — L'await oublié : un bug à corriger (jeudi matin)
// museumLabelOrMessage(id) promet un texte :
// - pour un identifiant connu : « nom - ville », par exemple 'musée de Dinan - Dinan' ;
// - pour un identifiant inconnu : 'Erreur : Musée introuvable : M9999' (le message de l'erreur attrapée).
// Ce code a UN bug : le message d'erreur ne s'affiche jamais, et le nom du musée non plus.
// Trouvez-le et corrigez-le, sans rien réécrire d'autre.
// Lancez les tests : node --test g2-await-oublie.test.js
import { loadMuseumOrFail } from '../data/museum-db.js';

export async function museumLabelOrMessage(id) {
  try {
    const museum = loadMuseumOrFail(id);
    return `${museum.Nom_officiel} - ${museum.Ville}`;
  } catch (error) {
    return `Erreur : ${error.message}`;
  }
}
