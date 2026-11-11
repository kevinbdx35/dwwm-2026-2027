# Données : fréquentation des musées du Grand-Est en 2019

- **Source** : « Fréquentation des Musées de France », ministère de la Culture, sur data.gouv.fr
  <https://www.data.gouv.fr/datasets/frequentation-des-musees-de-france-1>
  (ressource `frequentation-des-musees-de-france.csv`).
- **Le site data.gouv.fr** (DINUM) mesure son audience avec Matomo, « configuré en mode exempté et ne nécessitant pas
  le recueil de votre consentement conformément aux recommandations de la CNIL » (page « Suivi d'audience et vie
  privée », consultée le 24/10/2026 : <https://www.data.gouv.fr/pages/suivi>).
- **Licence** : Licence Ouverte / Open Licence (Etalab)
  <https://www.etalab.gouv.fr/wp-content/uploads/2014/05/Licence_Ouverte.pdf>
- **Extraction** : copie figée le 26/09/2026 (fichier source mis à jour le 21/09/2026 sur data.gouv.fr).
  Filtre : `annee` = 2019 et `region` = Grand-Est, soit 116 lignes.
  Colonnes conservées : `IDMuseofile`, `nom_du_musee`, `ville`, `departement`, `payant`, `gratuit`, `total`, `scolaires`.
- **Aucune valeur n'a été modifiée** : les imperfections du fichier sont celles de la source.
  - tous les nombres sont stockés en texte (le fichier source est un CSV) ;
  - des valeurs manquantes : `scolaires` vide pour 9 musées, et une ligne sans identifiant ni nom ;
  - des espaces parasites en fin de nom, et un musée présent deux fois.

## Les musées déjà nettoyés

`musees-grand-est-2019-propres.json` contient les 114 musées du fichier ci-dessus, déjà nettoyés : lignes sans
identifiant écartées, doublon retiré (la première ligne est gardée), noms sans espaces parasites, nombres convertis
(`null` quand la valeur est vide), clés en anglais (`id`, `name`, `city`, `department`, `paid`, `free`, `total`,
`schoolVisits`). C'est le résultat attendu de `dc3-nettoyer-tout` ; les tests de `dc4` et `dc5` s'en servent, pour
qu'on puisse les faire sans avoir fait `dc3`. Généré le 10/11/2026 à partir de la copie figée, sans autre modification.
