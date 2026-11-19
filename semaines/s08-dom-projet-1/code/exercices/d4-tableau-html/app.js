// Palier 3 — Un tableau HTML (lundi matin : le DOM ; autonome)
// Remplissez le <tbody id="lignes"> : une ligne <tr> par musée, et dans chaque ligne,
// trois cellules <td> : le nom, la ville, puis le nombre de domaines (domains.length).
// Documentation : MDN, « <table> : l'élément de tableau » ; les éléments tr et td.
// Vérifiez dans le navigateur : trois lignes, trois colonnes, sous les en-têtes.

const museums = [
  // Each museum: its name, its city, its domains (Muséofile, Licence Ouverte 2.0).
  { name: 'musée de Dinan', city: 'Dinan', domains: ['Archéologie', 'Beaux-Arts', 'Ethnologie', 'Histoire'] },
  { name: "musée d'art et d'histoire", city: 'Saint-Brieuc', domains: ['Archéologie', 'Arts décoratifs', 'Beaux-arts', 'Ethnologie', 'Histoire', 'Photographie', 'Technique et industrie'] },
  { name: 'musée Mathurin-Méheut', city: 'Lamballe-Armor', domains: ['Arts décoratifs', 'Art moderne et contemporain'] },
];
console.log(museums);
