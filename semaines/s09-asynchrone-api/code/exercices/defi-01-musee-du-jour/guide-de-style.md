# Guide de style : le musée du jour

## Couleurs

| Variable | Valeur | Sert à |
|---|---|---|
| `--couleur-encre` | `#1c1e21` | le texte ; le fond de l'en-tête (palier 2) |
| `--couleur-discret` | `#5b5f66` | le texte discret : la ville, le pied de page |
| `--couleur-papier` | `#faf6ef` | le fond de la page |
| `--couleur-bord` | `#e4dccd` | le bord des cartes et des blocs |
| `--couleur-brique` | `#9c3d1f` | le fond des liens « Voir la fiche » |
| `--couleur-brique-fonce` | `#6e2a14` | le même fond, au survol et au focus |
| `--couleur-soleil` | `#f2c14e` | le fond du badge ; les liens du menu au survol |
| blanc | `#ffffff` | le fond des cartes et des blocs ; le texte des liens « Voir la fiche » |

## Police

- **Atkinson Hyperlegible**, dans le dossier `fonts/` : `AtkinsonHyperlegible-Regular.woff2` (400)
  et `AtkinsonHyperlegible-Bold.woff2` (700). Elle distingue bien l, 1 et I, O et 0.
- Police de secours : `sans-serif`.

## Tailles

| Élément | Téléphone | À partir de 48rem (768 px) |
|---|---|---|
| texte | 1rem (16 px), interligne 1.5 | pareil |
| nom du musée sur la fiche (`h1`) | 2rem (32 px), interligne 1.2 | 2.5rem (40 px) |
| nom du musée sur une carte | 1.375rem (22 px) | pareil |
| badge, pied de page | 0.875rem (14 px) | pareil |
| image d'une carte | 12rem de haut | pareil |
| grande image de la fiche | 14rem de haut | 22rem de haut |

## Espaces et formes

- `--espace-petit` : 0.5rem (8 px) ; `--espace-moyen` : 1rem (16 px) ; `--espace-grand` : 2rem (32 px).
- Carte : 22rem de large au plus, bord de 2px `--couleur-bord`, coins arrondis de 12px.
- Badge : coins tout ronds (`999px`), en gras, à 0.75rem (12 px) du haut et de la gauche de l'image.
- Lien « Voir la fiche » : coins arrondis de 6px ; au focus du clavier, un contour de 3px `--couleur-encre`,
  à 3px du lien.
- Fiche (palier 2) : contenu de 64rem de large au plus, centré ; à partir de 48rem, trois colonnes
  pour les infos pratiques et pour les autres musées.
- Fiche (palier 2) : le texte du musée fait 40rem de large au plus (des lignes courtes) ; dans un bloc
  d'infos, le titre (`h3`) n'a pas de marge au-dessus et 0.5rem (8 px) en dessous, le paragraphe n'a pas
  de marge.
