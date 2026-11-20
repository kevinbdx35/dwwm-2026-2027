// Palier 2 — Chercher par ville (lundi après-midi : les événements)
// À chaque caractère tapé dans le champ #ville (événement input) :
// 1. gardez les musées dont la ville, en minuscules, commence par le texte tapé, en minuscules
//    (la méthode des chaînes qui dit si un texte commence par un autre est dans MDN :
//    cherchez « String startsWith ») ;
// 2. videz la liste #liste (textContent = ''), puis ajoutez un <li> « nom - ville » par musée gardé ;
// 3. écrivez le nombre de musées gardés dans #resume : « 2 musées », ou « Aucun musée ».
// Vérifiez dans le navigateur : « r » donne 2 musées, « q » 2, « v » 2, « z » aucun ;
// un champ vidé affiche de nouveau les 6 musées.

const museums = [
  { name: 'musée des beaux-arts', city: 'Rennes' },
  { name: 'musée de Bretagne', city: 'Rennes' },
  { name: 'musée des beaux-arts', city: 'Quimper' },
  { name: 'musée départemental breton', city: 'Quimper' },
  { name: 'musée des beaux-arts', city: 'Vannes' },
  { name: "musée d'histoire et d'archéologie", city: 'Vannes' },
];
console.log(museums);
