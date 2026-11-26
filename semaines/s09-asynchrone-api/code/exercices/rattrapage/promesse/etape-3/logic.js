// La logique : elle demande des musées au faux serveur et renvoie une promesse.
// Elle se vérifie dans le terminal : node essai.js (depuis pas-a-pas-promesse).
// La ligne import est déjà écrite : loadMuseum et loadMuseumsOfCity renvoient chacune
// une promesse (data/museum-db.js, à ne pas modifier).
import { loadMuseum, loadMuseumsOfCity } from '../data/museum-db.js';

export function cityMuseumNames(id) {
  // Première demande : le musée qui a cet identifiant
  return loadMuseum(id)
    // then 1 : il arrive, on demande ceux de sa ville
    .then((museum) => loadMuseumsOfCity(museum.Ville))
    // then 2 : la liste arrive, on garde les noms
    .then((museums) => museums.map((item) => item.Nom_officiel));
}
