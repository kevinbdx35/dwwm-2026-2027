// Palier 1 : entraînement — Commenter : la logique (jeudi après-midi)
// Ce code marche : ne le modifiez pas. Remplacez chaque « // ? » par une phrase, en français,
// qui explique la ligne placée juste en dessous (60 caractères au plus, comme dans le pas à pas).
// Il n'y a pas de test : votre formateur lit vos commentaires.

// ?
export async function loadMuseumsOfCity(url, city) {
  // ?
  const response = await fetch(url);
  // ?
  if (!response.ok) {
    // ?
    throw new Error(`Réponse du serveur : ${response.status}`);
  }
  // ?
  const result = await response.json();
  // ?
  return result.data.filter((museum) => museum.Ville === city);
}
