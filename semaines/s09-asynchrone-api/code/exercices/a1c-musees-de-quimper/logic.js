// Palier 1 : entraînement — Les musées de Quimper : la logique (mardi après-midi)
// namesInCity(city) attend les musées de la ville, puis renvoie le tableau de leurs noms.
// Exemple : 'Quimper' donne ['musée des beaux-arts', 'musée départemental breton'].
// 1. Ajoutez async devant function. 2. Attendez le tableau des musées avec await.
// 3. Renvoyez un nouveau tableau, avec le champ Nom_officiel de chaque musée (map, semaine 7).
// Lancez les tests : node --test a1c-musees-de-quimper.test.js
import { loadMuseumsOfCity } from '../data/museum-db.js';

export function namesInCity(city) {
  // TODO: replace the two lines below with your code.
  loadMuseumsOfCity(city);
  return [];
}
