// Palier 3 — La délégation (lundi après-midi : les événements ; autonome)
// La même page que e6, mais avec UN SEUL écouteur, posé sur la liste <ul id="liste">.
// 1. Créez un bouton par musée, comme dans e6, mais sans écouteur. Chaque bouton porte
//    l'identifiant de son musée dans un attribut data-id
//    (documentation : MDN, « HTMLElement: dataset »).
// 2. L'écouteur de la liste retrouve le bouton cliqué à partir de event.target
//    (documentation : MDN, « Element: closest() »), puis le musée qui a cet identifiant (find),
//    et écrit dans #choix : « Musée choisi : nom - ville ».
// 3. Un clic dans la liste, entre deux boutons, ne doit provoquer aucune erreur dans la console.

const museums = [
  { id: 'M0211', name: 'musée des beaux-arts', city: 'Rennes' },
  { id: 'M0212', name: 'musée de Bretagne', city: 'Rennes' },
  { id: 'M0207', name: 'musée des beaux-arts', city: 'Quimper' },
  { id: 'M0208', name: 'musée départemental breton', city: 'Quimper' },
  { id: 'M0197', name: 'musée des beaux-arts', city: 'Brest' },
  { id: 'M0199', name: 'musée de la pêche', city: 'Concarneau' },
];
console.log(museums);
