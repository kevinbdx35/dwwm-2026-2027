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
