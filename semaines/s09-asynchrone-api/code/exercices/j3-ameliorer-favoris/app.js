/* eslint-disable no-var, eqeqeq */
// Palier 3 — Améliorer la page des favoris (vendredi matin). Type d'exercice : améliorer.
// Cette page MARCHE : ouvrez-la avec Live Preview, ajoutez et retirez des favoris, rechargez.
// Elle est mal écrite. Améliorez le code SANS changer ce que fait la page :
// - plus aucun var : var est l'ancienne façon de déclarer une variable ;
//   remplacez-la par let ou const ;
// - plus aucun == ni != : seulement === et !== ;
// - la lecture du stockage (localStorage.getItem, puis JSON.parse) est écrite trois fois :
//   écrivez-la UNE fois, dans une fonction ; getItem ne doit plus apparaître qu'une fois ;
// - des noms qui disent ce que contient la variable (pas a, b, x, tmp) ;
// - à la fin, supprimez la première ligne des deux fichiers (eslint-disable).
// Lancez les tests : node --test j3-ameliorer-favoris.defi.test.js
import { MUSEUMS } from '../data/musees-bretagne.js';
import { toggleFavorite } from './logic.js';

var x = document.querySelector('#resume');
var l = document.querySelector('#liste');
var b = document.querySelector('#vider');
var m = MUSEUMS.filter((museum) => museum.Departement === 'Ille-et-Vilaine');

function show() {
  var a = [];
  if (localStorage.getItem('j3-favoris') != null) {
    a = JSON.parse(localStorage.getItem('j3-favoris'));
  }
  x.textContent = a.length + ' favori(s) sur ' + m.length + ' musées';
  l.textContent = '';
  for (const museum of m) {
    var item = document.createElement('li');
    var button = document.createElement('button');
    button.type = 'button';
    if (a.includes(museum.Identifiant) == true) {
      button.textContent = '* Retirer : ' + museum.Nom_officiel;
      button.classList.add('favori');
    } else {
      button.textContent = 'Ajouter : ' + museum.Nom_officiel;
    }
    button.addEventListener('click', () => {
      var tmp = [];
      if (localStorage.getItem('j3-favoris') != null) {
        tmp = JSON.parse(localStorage.getItem('j3-favoris'));
      }
      tmp = toggleFavorite(tmp, museum.Identifiant);
      localStorage.setItem('j3-favoris', JSON.stringify(tmp));
      show();
    });
    item.append(button);
    l.append(item);
  }
}

b.addEventListener('click', () => {
  localStorage.removeItem('j3-favoris');
  show();
});

show();
