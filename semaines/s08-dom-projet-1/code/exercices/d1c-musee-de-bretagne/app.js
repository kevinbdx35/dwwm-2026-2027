// Palier 1 : entraînement — La fiche du musée de Bretagne (lundi matin : le DOM)
// Un exercice complet : vous modifiez un peu les trois fichiers.
// 1. index.html : sous la ville, ajoutez <p id="telephone">Téléphone à remplacer</p>.
// 2. style.css : à la fin, écrivez la classe .encadre : padding: 0.5rem; border: 2px solid #1f5fbf;
//    et border-radius: 6px;
// 3. app.js : écrivez le nom dans #titre, la ville dans #ville, et « Téléphone : 02 23 40 66 70 »
//    dans #telephone (querySelector, textContent).
// 4. app.js : ajoutez la classe encadre au paragraphe du téléphone (classList.add).
// 5. app.js : masquez le paragraphe #chargement (hidden).
// Vérifiez dans le navigateur : plus de « Chargement… », plus aucun texte « à remplacer » ;
// le téléphone est dans un cadre bleu.
const museum = {
  name: 'musée de Bretagne',
  city: 'Rennes',
  phone: '02 23 40 66 70',
};
console.log(museum);
