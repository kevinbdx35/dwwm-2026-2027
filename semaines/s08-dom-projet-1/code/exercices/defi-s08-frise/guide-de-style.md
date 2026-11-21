# Guide de style : la frise du sémaphore

## Couleurs

Les variables sont déjà écrites en haut de `style.css`.

| Variable | Valeur | Sert à |
|---|---|---|
| `--couleur-encre` | `#102a43` | le texte ; le fond de l'en-tête (palier 2) |
| `--couleur-discret` | `#52606d` | le texte discret : le lieu, le pied de page |
| `--couleur-ecume` | `#f4f7f6` | le fond de la page |
| `--couleur-bord` | `#d9e2e7` | le bord des cartes et des blocs |
| `--couleur-mer` | `#1f5f7a` | la ligne de la frise ; le fond de l'année ; les liens |
| `--couleur-sable` | `#f3d9a4` | le fond du thème ; le fond des blocs « En chiffres » (palier 2) |
| blanc | `#ffffff` | le fond des cartes ; le texte de l'année et de l'en-tête |

## Police

- **Atkinson Hyperlegible**, dans le dossier `fonts/` : `AtkinsonHyperlegible-Regular.woff2` (400)
  et `AtkinsonHyperlegible-Bold.woff2` (700). Les deux `@font-face` sont déjà écrits en haut de `style.css`.
- Police de secours : `sans-serif`.

## Tailles

| Élément | Téléphone | À partir de 48rem (768 px) |
|---|---|---|
| texte | 1rem (16 px), interligne 1.5 | pareil |
| titre de la page (`h1`, palier 2) | 2rem (32 px), interligne 1.2 | 2.5rem (40 px) |
| titre d'une carte | 1.25rem (20 px) | pareil |
| année, thème, pied de page | 0.875rem (14 px) | pareil |
| chiffre (palier 2) | 2rem (32 px), en gras | pareil |

## Espaces et formes

- `--espace-petit` : 0.5rem (8 px) ; `--espace-moyen` : 1rem (16 px) ; `--espace-grand` : 2rem (32 px).
- Carte d'une date : 36rem de large au plus, centrée ; fond blanc ; bord de 2px `--couleur-bord` ;
  coins arrondis de 8px ; à gauche, une ligne de 4px `--couleur-mer` : c'est la ligne de la frise.
- Année : une pastille `--couleur-mer`, texte blanc en gras, coins tout ronds (`999px`), posée à cheval
  sur le haut de la carte, à 1rem du bord gauche.
- Thème : fond `--couleur-sable`, coins tout ronds, en gras.
- Lien « Voir la salle » : couleur `--couleur-mer`, souligné ; au focus du clavier, un contour de 3px
  `--couleur-encre`, à 2px du lien.
- Page (palier 2) : contenu de 64rem de large au plus, centré ; à partir de 48rem, le haut de la page
  sur deux colonnes (l'image à gauche, le texte à droite) et les trois chiffres sur une ligne.
