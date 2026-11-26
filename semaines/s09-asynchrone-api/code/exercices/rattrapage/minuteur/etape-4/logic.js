// Pas à pas — la logique (lundi après-midi). Déjà écrite : vous la connaissez depuis la semaine 8.
// museumLabel(museum) renvoie « nom - ville », par exemple : 'musée de Dinan - Dinan'.

export function museumLabel(museum) {
  return `${museum.Nom_officiel} - ${museum.Ville}`;
}
