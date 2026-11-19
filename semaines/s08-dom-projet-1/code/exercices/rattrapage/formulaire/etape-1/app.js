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
