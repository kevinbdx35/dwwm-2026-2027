// La logique : elle demande des musées au faux serveur et renvoie une promesse.
// Elle se vérifie dans le terminal : node essai.js (depuis pas-a-pas-promesse).
// La ligne import est déjà écrite : loadMuseum et loadMuseumsOfCity renvoient chacune
// une promesse (data/museum-db.js, à ne pas modifier).
import { loadMuseum, loadMuseumsOfCity } from '../data/museum-db.js';

export function cityMuseumNames(id) {
  // Étape 3 : remplacez la ligne provisoire ci-dessous.
  return loadMuseum(id).then(() => loadMuseumsOfCity('Quimper'));
}
