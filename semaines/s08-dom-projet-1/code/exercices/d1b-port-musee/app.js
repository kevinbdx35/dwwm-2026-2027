// Palier 1 : entraînement — La fiche du port musée (lundi matin : le DOM)
// Un exercice complet : vous modifiez un peu les trois fichiers.
// 1. index.html : sous la ville, ajoutez <p id="departement">Département à remplacer</p>.
// 2. style.css : à la fin, écrivez la classe .discret : color: #5b616b; et font-size: 0.9rem;
// 3. app.js : écrivez le nom dans #titre, la ville dans #ville, et « Département : Finistère »
//    dans #departement (querySelector, textContent).
// 4. app.js : ajoutez la classe discret au paragraphe du département (classList.add).
// Vérifiez dans le navigateur : plus aucun texte « à remplacer » ; le département est gris et plus petit.
const museum = {
  name: 'port musée',
  city: 'Douarnenez',
  department: 'Finistère',
};
console.log(museum);
