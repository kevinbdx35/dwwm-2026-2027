// Palier 2 — Le livre d'or (vendredi matin : la faille XSS)
// Vous écrivez deux fichiers : index.html (le formulaire) et app.js, sans faille dès le départ.
// 1. index.html : sous la liste, écrivez <form id="formulaire" novalidate> avec deux champs de type text
//    et leurs <label> : « Votre prénom » (id auteur), « Votre avis » (id texte) ; puis un bouton d'envoi « Publier ».
// 2. app.js : écrivez showReview(review). Chaque avis s'affiche ainsi : <li><strong>Prénom</strong> : avis</li>,
//    sans innerHTML : createElement pour le <li> et le <strong>, textContent pour le prénom, puis ajoutez
//    au <li> le <strong>, puis le texte « : avis » (append accepte aussi un texte :
//    item.append(strong, ` : ${review.text}`)) ; enfin, ajoutez le <li> à la liste.
// 3. app.js : appelez showReview pour chaque avis du tableau reviews (for...of).
// 4. app.js : à l'envoi du formulaire (submit, sans rechargement), construisez un avis { author, text }
//    à partir des deux champs, puis appelez showReview.
// Vérifiez : l'avis <img src="x" onerror="alert('XSS')"> s'affiche comme du texte, sans alerte.
// Lancez les tests : node --test xss2-livre-or.test.js

const reviews = [
  { author: 'Lou', text: 'Superbe collection de maquettes.' },
  { author: 'Sam', text: 'Le bateau à flot vaut la visite.' },
];
const list = document.querySelector('#avis');
console.log(reviews, list);
