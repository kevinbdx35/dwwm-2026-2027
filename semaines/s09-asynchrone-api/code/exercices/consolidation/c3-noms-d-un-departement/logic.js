// Palier 2 — Les noms des musées d'un département : la logique (consolidation des promesses)
// Vous écrivez deux fichiers sur trois : ce fichier et app.js ; la page est fournie.
// namesOfDepartmentLater(department) renvoie une PROMESSE : celle du tableau des noms des
// musées du département, dans l'ordre des données. Par exemple, pour "Côtes-d'Armor" :
// ['musée de Dinan', 'musée Mathurin-Méheut', "musée d'art et d'histoire"].
// Un département sans musée dans les données : [].
// Partez de loadMuseums() (déjà importée), puis une chaîne de then : un then pour garder les
// musées du département (filter), un then pour ne garder que leurs noms (map).
// Lancez les tests (depuis semaine-09) : node --test c3-noms-d-un-departement.test.js
import { loadMuseums } from '../../data/museum-db.js';

export function namesOfDepartmentLater(department) {
  // TODO: replace the line below with your chain of then.
  return loadMuseums().then(() => []);
}
