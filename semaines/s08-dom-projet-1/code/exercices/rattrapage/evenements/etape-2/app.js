// Pas à pas du lundi après-midi : les événements.
// Déjà écrit (le DOM de lundi) : la liste des noms, et une fonction qui l'affiche.
const names = [
  'musée de la pêche',
  'musée bigouden',
  'écomusée de la Bintinais',
  'musée des phares et balises',
  'musée de Bretagne',
  'écomusée de Saint-Degan',
];
const list = document.querySelector('#liste');

function showList(items) {
  list.textContent = '';
  for (const name of items) {
    const item = document.createElement('li');
    item.textContent = name;
    list.append(item);
  }
}

showList(names);

// Le bouton de la page
const button = document.querySelector('#bouton');
// addEventListener : quand on clique, la fonction s'exécute
button.addEventListener('click', () => {
  // Visible dans la console, à chaque clic
  console.log('clic !');
});

// Le paragraphe du compteur
const counter = document.querySelector('#compteur');
// Le nombre de clics, qui va changer : let
let clicks = 0;
// Un deuxième écouteur sur le même bouton
button.addEventListener('click', () => {
  // Un clic de plus
  clicks = clicks + 1;
  // Le nouveau nombre, écrit dans la page
  counter.textContent = `${clicks} clics`;
});
