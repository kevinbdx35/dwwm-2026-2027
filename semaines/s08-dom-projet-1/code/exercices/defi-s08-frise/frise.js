// Défi de la semaine 8, palier 3 : les données, déjà écrites. Ne modifiez pas ce fichier.
// Les dates ne sont pas dans l'ordre : c'est voulu.

/** The five dates of the (invented) semaphore. */
export const EVENTS = [
  { year: 1931, title: 'La lampe électrique', text: 'Une lampe électrique remplace la lampe à pétrole : on voit les signaux de nuit.', theme: 'technique' },
  { year: 1862, title: 'La construction', text: 'Des maçons bâtissent le sémaphore en granit, au bout de la pointe de Kerbrézen.', theme: 'batiment' },
  { year: 2011, title: 'Le musée', text: 'La commune restaure le bâtiment et y ouvre un musée.', theme: 'musee' },
  { year: 1898, title: 'Le télégraphe', text: 'Un fil relie le sémaphore à la ville : les messages des navires arrivent en quelques minutes.', theme: 'technique' },
  { year: 1974, title: 'La fermeture', text: 'Les radars remplacent les guetteurs : le sémaphore ferme ses portes.', theme: 'batiment' },
];

/** The label shown for each theme. */
export const THEMES = {
  batiment: 'Le bâtiment',
  technique: 'La technique',
  musee: 'Le musée',
};
