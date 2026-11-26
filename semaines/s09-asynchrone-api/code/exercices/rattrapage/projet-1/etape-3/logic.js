// Catch-up copy — the logic of US-1 only (the label of a museum).
// Your own logic.js also has searchMuseums (US-2) and findMuseum (US-3): keep yours.
export function museumLabel({ Nom_officiel: name, Ville: city }) {
  return `${name} - ${city}`;
}
