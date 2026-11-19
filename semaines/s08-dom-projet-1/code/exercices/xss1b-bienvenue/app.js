// Palier 1 : entraînement — Le message de bienvenue (vendredi matin : la faille XSS)
// Cette page affiche le prénom du visiteur avec innerHTML : elle est attaquable.
// Un exercice complet : vous modifiez un peu les trois fichiers.
// 1. Essayez l'attaque : dans le champ, écrivez <img src="x" onerror="alert('XSS')"> : une alerte s'ouvre.
// 2. app.js : remplacez innerHTML par textContent, et retirez la balise <strong> du texte.
// 3. index.html : donnez la classe bienvenue au paragraphe #message (class="bienvenue").
// 4. style.css : à la fin, écrivez la classe .bienvenue : font-weight: 700; et color: #1f5fbf;
//    le gras vient maintenant du CSS, plus d'une balise écrite dans une chaîne.
// 5. Refaites l'attaque : le texte s'affiche tel quel, en gras et en bleu, aucune alerte.
// Lancez les tests : node --test xss1b-bienvenue.test.js
const form = document.querySelector('#accueil');
const field = document.querySelector('#prenom');
const message = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstName = field.value;
  message.innerHTML = `Bienvenue, <strong>${firstName}</strong> !`;
});
