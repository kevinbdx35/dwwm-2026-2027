# Défi de la semaine 8 : la frise du sémaphore

Un défi d'intégration : vous recevez le contenu, l'image, la police et un guide de style ;
vous reproduisez la maquette en HTML et en CSS, puis vous la rendez interactive en JavaScript.
La maquette (les captures à 375 px et à 1280 px, et l'état au focus du clavier) est sur la page du cours :
semaine 8, vendredi 27/11 après-midi, section « Défi de la semaine ».

Le sémaphore, la pointe de Kerbrézen et le musée sont inventés pour le cours.

## Le dossier

- `contenu.md` : tous les textes de la page, déjà écrits. Copiez-les.
- `guide-de-style.md` : les couleurs, la police, les tailles et les espaces.
- `images/` : l'illustration ; `fonts/` : la police et sa licence (`OFL.txt`).
- `CREDITS.md` : d'où viennent l'image et la police.
- `etape.html` et `style.css` : les fichiers de départ du palier 1.
- `frise.js` et `logic.js` : les fichiers de départ du palier 3.

## Les user stories

1. En tant que visiteur, je veux lire une date de l'histoire du sémaphore sur une carte claire. (Palier 1)
2. En tant que visiteur, je veux toute l'histoire du sémaphore sur une page, lisible sur mon téléphone
   comme sur un ordinateur. (Palier 2)
3. En tant que visiteur, je veux choisir un thème et ne voir que les dates de ce thème. (Palier 3)
4. En tant que visiteur qui utilise le clavier, je veux voir où je suis quand j'appuie sur Tab. (Paliers 1 à 3)

## Les trois paliers

- **Palier 1 : la carte d'une date** (guidé, 30 min). Fichiers `etape.html` et `style.css`, étapes sur la page du cours.
- **Palier 2 : la page de la frise** (semi-guidé, 45 min). Vous créez `index.html` et vous complétez `style.css`.
- **Palier 3 : choisir un thème** (autonome). `logic.js` et ses tests, puis `app.js`, que vous créez.
  Tests : depuis `semaine-08`, `node --test defi-s08-frise.defi.test.js`.

## À rendre

Pour le mardi 01/12 : le lien de votre commit dans `dwwm-tp` (page du commit sur GitHub), envoyé au formateur.
Rendez ce que vous avez fait vendredi : le travail à la maison n'est pas obligatoire.
Mardi 01/12, de 15 h 30 à 17 h, on corrige ensemble.

## La liste de contrôle

Pour chaque palier, avant de dire « fini » :

1. **Vous devez voir** : votre page ressemble à la maquette, à 375 px et à 1280 px
   (outils du navigateur, mode appareil).
2. **Le validateur du W3C** : collez votre HTML dans l'onglet *Validate by Direct Input* : aucune erreur.
3. **WAVE** (extension du navigateur) : aucune erreur, aucune erreur de contraste.
4. **Lighthouse**, catégorie *Accessibilité* : 90 ou plus.
5. **Au clavier** : avec Tab, chaque lien a un contour bien visible.
