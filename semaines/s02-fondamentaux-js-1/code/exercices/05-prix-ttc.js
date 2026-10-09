// Exercice 5 (facultatif) — Prix TTC
// Le programme reçoit un prix hors taxes et un taux de TVA en % :
//   node 05-prix-ttc.js 100 20
// Il doit afficher exactement :
//   Prix TTC : 120.00 €
// Formule : prix TTC = prix HT × (1 + taux / 100).
// Arrondissez à deux décimales avec toFixed(2).

// Provided lines: do not change them.
const priceExclTax = Number(process.argv[2]);
const vatRate = Number(process.argv[3]);

// TODO: replace the line below with your code.
console.log('À faire', priceExclTax, vatRate);
