// Pas à pas du vendredi matin : la faille XSS.
// Déjà écrit : le formulaire, et la lecture du texte tapé.
const names = ['musée de la pêche', 'musée bigouden', 'port musée', 'musée de Bretagne'];
const form = document.querySelector('#recherche');
const field = document.querySelector('#requete');
const message = document.querySelector('#message');
const list = document.querySelector('#liste');
console.log(names, form, field, message, list);

// Le même affichage, sans danger, à la place du précédent
form.addEventListener('submit', (event) => {
  // La page ne se recharge pas
  event.preventDefault();
  // textContent : le texte reste du texte, jamais du HTML
  message.textContent = `Résultats pour : ${field.value}`;
});

// Les résultats : des éléments créés un par un
form.addEventListener('submit', (event) => {
  // La page ne se recharge pas
  event.preventDefault();
  // On vide la liste avant de la remplir
  list.textContent = '';
  // Les noms qui contiennent le texte tapé
  const found = names.filter((name) => name.includes(field.value));
  // Un <li> par nom, rempli avec textContent
  for (const name of found) {
    // createElement + textContent : aucun HTML interprété
    const item = document.createElement('li');
    // Le nom, comme du texte
    item.textContent = name;
    // Ajouté à la liste
    list.append(item);
  }
});
