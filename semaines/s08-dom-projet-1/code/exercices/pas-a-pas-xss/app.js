// Pas à pas du vendredi matin : la faille XSS.
// Déjà écrit : le formulaire, et la lecture du texte tapé.
const names = ['musée de la pêche', 'musée bigouden', 'port musée', 'musée de Bretagne'];
const form = document.querySelector('#recherche');
const field = document.querySelector('#requete');
const message = document.querySelector('#message');
const list = document.querySelector('#liste');
console.log(names, form, field, message, list);
