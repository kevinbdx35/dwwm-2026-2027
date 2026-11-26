// Palier 1 : entraînement — Prédire l'ordre (lundi après-midi). Ce code est complet : ne le modifiez pas
// avant d'avoir écrit votre prédiction dans prediction.txt.
// Un clic sur le bouton ajoute trois lignes à la liste. Dans quel ordre ?

const button = document.querySelector('#action');
const list = document.querySelector('#liste');

// Adds one line at the end of the list.
function addLine(text) {
  const item = document.createElement('li');
  item.textContent = text;
  list.append(item);
}

button.addEventListener('click', () => {
  list.textContent = '';
  addLine('A — Je cherche le musée');
  setTimeout(() => {
    addLine('B — Musée trouvé');
  }, 0);
  addLine('C — Je prépare la page');
});
