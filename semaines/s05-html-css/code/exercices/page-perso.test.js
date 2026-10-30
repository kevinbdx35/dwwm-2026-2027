// Tests for page-perso/index.html — run them with: node --test
// They check the structure of the page; the W3C validator checks the syntax.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const dir = process.env.EXERCISES_DIR ?? import.meta.dirname;
const html = fs.readFileSync(path.join(dir, 'page-perso', 'index.html'), 'utf8');
// Comments are removed so that a tag written in a comment does not count.
const page = html.replace(/<!--[\s\S]*?-->/g, '');

const count = (regex) => (page.match(regex) ?? []).length;

test('la langue de la page est indiquée (lang)', () => {
  assert.match(page, /<html[^>]*\slang="[a-z]{2}/i);
});

test('encodage UTF-8 et viewport pour le mobile', () => {
  assert.match(page, /<meta[^>]*charset="utf-8"/i);
  assert.match(page, /<meta[^>]*name="viewport"/i);
});

test('un titre de page (title) non vide', () => {
  assert.match(page, /<title>\s*\S[^<]*<\/title>/i);
});

test('la feuille de style style.css est reliée', () => {
  assert.match(page, /<link[^>]*rel="stylesheet"[^>]*href="style\.css"|<link[^>]*href="style\.css"[^>]*rel="stylesheet"/i);
});

test('un seul titre h1', () => {
  assert.equal(count(/<h1[\s>]/gi), 1);
});

test('les balises sémantiques header, nav, main et footer sont présentes', () => {
  for (const tag of ['header', 'nav', 'main', 'footer']) {
    assert.match(page, new RegExp(`<${tag}[\\s>]`, 'i'), `balise <${tag}> absente`);
  }
});

test('chaque image a un attribut alt', () => {
  const images = page.match(/<img\b[^>]*>/gi) ?? [];
  for (const image of images) {
    assert.match(image, /\salt="/i, `image sans alt : ${image}`);
  }
});

test('un formulaire avec un bouton d\'envoi', () => {
  assert.match(page, /<form[\s>]/i);
  assert.match(page, /<button[^>]*type="submit"|<input[^>]*type="submit"/i);
});

test('chaque champ du formulaire a un label relié par for et id', () => {
  const fields = page.match(/<(input|textarea|select)\b[^>]*>/gi) ?? [];
  const labelled = [...page.matchAll(/<label[^>]*\sfor="([^"]+)"/gi)].map((m) => m[1]);
  const visibleFields = fields.filter((f) => !/type="(submit|button|hidden|reset)"/i.test(f));
  assert.ok(visibleFields.length > 0, 'aucun champ de saisie');
  for (const field of visibleFields) {
    const id = field.match(/\sid="([^"]+)"/i)?.[1];
    assert.ok(id, `champ sans id : ${field}`);
    assert.ok(labelled.includes(id), `pas de <label for="${id}">`);
  }
});

test('le formulaire est annoncé comme non fonctionnel', () => {
  assert.match(page, /non fonctionnel/i);
});

test('aucune adresse e-mail en clair dans le code', () => {
  assert.doesNotMatch(html, /mailto:/i);
  assert.doesNotMatch(html, /[\w.+-]+@[\w-]+\.[a-z]{2,}/i);
});
