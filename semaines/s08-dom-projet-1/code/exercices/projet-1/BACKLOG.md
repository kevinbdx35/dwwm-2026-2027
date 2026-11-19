# Backlog — Explorateur des musées de Bretagne

Chaque histoire se livre sur sa propre branche, par une Pull Request que vous relisez vous-même avec la grille de
relecture, puis que vous fusionnez dans `main`.

| Id | En tant que… | je veux… | afin de… | Critère d'acceptation | Quand |
|---|---|---|---|---|---|
| US-1 | visiteur | voir la liste des musées | découvrir ce que contient la région | un résumé (« 34 musées ») et un élément par musée : son nom et sa ville | S8 jeudi |
| US-2 | visiteur | rechercher un musée par son nom ou sa ville | trouver vite un musée | la liste se met à jour ; une recherche vide affiche tout ; un message si aucun musée ne correspond | S8 jeudi et vendredi |
| US-3 | visiteur | voir le détail d'un musée quand je le choisis | en savoir plus | au moins trois informations du musée ; utilisable au clavier | S8 vendredi, S9 mercredi |
| US-4 | visiteur | voir des données à jour | avoir la liste actuelle | les musées viennent de l'API (`fetch`), et non plus de la copie figée | S9 jeudi |
| US-5 | visiteur | savoir ce qui se passe | ne pas rester devant une page vide | quatre états : chargement, erreur, vide, succès | S9 jeudi |
| US-6 | visiteur | consulter le site en ligne | l'ouvrir de n'importe où | le site est publié, en HTTPS | S11 lundi |

Palier 3 (pour ceux qui avancent) : compter les musées par département (S8) ; garder ses musées favoris
(`localStorage`, S9 vendredi).
