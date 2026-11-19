// Pas à pas du lundi matin : la fiche d'un musée.
// The data of one museum (Muséofile, ministère de la Culture, Licence Ouverte 2.0).
const museum = {
  name: 'musée de la pêche',
  city: 'Concarneau',
  domains: ['Ethnologie', 'Histoire', 'Sciences de la nature'],
};
console.log(museum);

// querySelector : trouve l'élément d'id titre
const title = document.querySelector('#titre');
// Affiche l'élément trouvé dans la console
console.log(title);

// textContent : remplace le texte du titre
title.textContent = museum.name;
// Même chose pour le paragraphe de la ville
document.querySelector('#ville').textContent = museum.city;

// createElement : crée un paragraphe, pas encore affiché
const note = document.createElement('p');
// Son texte
note.textContent = 'Un musée de France, en Bretagne.';
// append : l'ajoute à la fin de <main>
document.querySelector('main').append(note);
