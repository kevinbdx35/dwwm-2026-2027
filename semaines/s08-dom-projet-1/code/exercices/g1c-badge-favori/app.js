// Palier 1 : entraînement — Le badge « Favori » au clic (jeudi après-midi : le GitHub Flow)
// Un exercice complet, livré comme une histoire : une branche, un commit, une Pull Request, une fusion.
// 1. Terminal : git switch -c g1c-badge-favori
// 2. index.html : dans la carte, sous la ville, ajoutez le badge, masqué :
//    <span id="badge" class="badge" hidden>Favori</span>
// 3. style.css : sous la ligne « Écrivez votre classe sous cette ligne. », ajoutez une seconde
//    règle .badge (elle s'ajoute à la première) pour placer le badge en haut à droite :
//    .badge { position: absolute; top: 0.5rem; right: 0.5rem; }
//    (la carte a déjà position: relative : elle est le repère du badge).
// 4. app.js : au clic sur le bouton #ajouter, affichez le badge (sa propriété hidden passe à false).
// 5. Vérifiez dans le navigateur, puis livrez : commit, git push -u origin g1c-badge-favori,
//    Pull Request relue avec la grille, fusion, git switch main, git pull.

