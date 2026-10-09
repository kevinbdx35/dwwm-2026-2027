// Exercice ESLint — lint-moi.js
// Ce programme contient cinq problèmes qu'ESLint sait trouver.
//   1. Lancez : npx eslint lint-moi.js
//   2. Pour chaque alerte, lisez la ligne, la colonne et le nom de la règle.
//   3. Corrigez, puis relancez ESLint jusqu'à ce qu'il n'affiche plus rien.
// Ensuite, node lint-moi.js Ada doit afficher : Bonjour Ada !

var firstName = process.argv[2];
let greeting = 'Bonjour';
const unused = 42;

if (firstName == undefined) {
  console.log('Donnez un prénom : node lint-moi.js Ada');
} else {
  console.log(greeting + ' ' + firstName + ' !');
}
console.log(mesage);
