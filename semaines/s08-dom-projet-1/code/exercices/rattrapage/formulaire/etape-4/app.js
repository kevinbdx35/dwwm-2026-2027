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

// Remplace l'écouteur de l'étape 2 : lire, puis vérifier
form.addEventListener('submit', (event) => {
  // La page ne se recharge pas
  event.preventDefault();
  // Le texte du champ, sans espaces autour
  const city = field.value.trim();
  // Champ vide : un message d'erreur, et aucun résultat
  if (city === '') {
    // Le message, visible sous le champ
    error.textContent = 'Écrivez le nom d’une ville.';
    // On efface un ancien résultat
    result.textContent = '';
  } else {
    // Champ rempli : plus de message d'erreur
    error.textContent = '';
    // Le résultat, écrit dans la page
    result.textContent = `Recherche : ${city}`;
  }
});

// Vider le message pendant la saisie
field.addEventListener('input', () => {
  // On efface l'erreur dès qu'on retape
  error.textContent = '';
});
