// Pas à pas du jeudi matin : valider un formulaire côté client.
// Le formulaire et ses éléments
const form = document.querySelector('#recherche');
const field = document.querySelector('#ville');
const error = document.querySelector('#erreur');
const result = document.querySelector('#resultat');
console.log(form, field, error, result);

// submit : le formulaire est envoyé (bouton ou Entrée)
form.addEventListener('submit', (event) => {
  // preventDefault : la page ne se recharge pas
  event.preventDefault();
  // Pour voir que l'écouteur s'exécute
  console.log('envoyé !');
});

// Un deuxième écouteur submit : lire le champ
form.addEventListener('submit', (event) => {
  // La page ne se recharge pas
  event.preventDefault();
  // value : le texte du champ ; trim : sans espaces autour
  const city = field.value.trim();
  // Le résultat, écrit dans la page
  result.textContent = `Recherche : ${city}`;
});
