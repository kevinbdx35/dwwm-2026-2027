// Palier 1 — Réparer la page (vendredi matin : la faille XSS)
// Cette page affiche ce que tape le visiteur avec innerHTML : elle est attaquable.
// 1. Essayez l'attaque : cherchez <img src="x" onerror="alert('XSS')"> : une alerte s'ouvre.
// 2. Remplacez les deux innerHTML : textContent pour le message ; pour chaque <li>,
//    createElement, puis textContent.
// 3. Refaites l'attaque : le texte s'affiche tel quel, aucune alerte.
// Lancez les tests : node --test xss1-reparer.test.js

const museums = [
  { name: 'musée de la pêche', city: 'Concarneau' },
  { name: 'musée bigouden', city: "Pont-l'Abbé" },
  { name: 'port musée', city: 'Douarnenez' },
];
const form = document.querySelector('#recherche');
const field = document.querySelector('#requete');
const message = document.querySelector('#message');
const list = document.querySelector('#liste');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = field.value;
  message.innerHTML = `Résultats pour : <strong>${query}</strong>`;
  const found = museums.filter((museum) => museum.name.includes(query) || museum.city.includes(query));
  list.textContent = '';
  for (const museum of found) {
    list.innerHTML += `<li>${museum.name} — ${museum.city}</li>`;
  }
});
