// Palier 1 : entraînement — Les villes visitées (vendredi matin : la faille XSS)
// Cette page ajoute chaque ville à la liste avec innerHTML : elle est attaquable.
// Un exercice complet : vous modifiez un peu les trois fichiers.
// 1. Essayez l'attaque : ajoutez la « ville » <img src="x" onerror="alert('XSS')"> : une alerte s'ouvre.
// 2. app.js : à la place de list.innerHTML += …, créez un <li> avec createElement, écrivez la ville
//    avec textContent, puis ajoutez-le à la liste avec append.
// 3. index.html : au-dessus de la liste, ajoutez <p id="derniere" class="discret"></p>.
// 4. style.css : à la fin, écrivez la classe .discret : color: #5b616b; et font-size: 0.9rem;
// 5. app.js : dans l'écouteur, écrivez « Dernière ville ajoutée : … » dans #derniere, avec textContent.
// 6. Refaites l'attaque : le texte s'affiche tel quel, dans la liste et dans le paragraphe, aucune alerte.
// Lancez les tests : node --test xss1c-villes.test.js
const form = document.querySelector('#ajout');
const field = document.querySelector('#ville');
const list = document.querySelector('#liste');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = field.value;
  list.innerHTML += `<li>${city}</li>`;
});
