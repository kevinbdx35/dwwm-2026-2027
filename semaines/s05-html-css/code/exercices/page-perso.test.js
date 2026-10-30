// Tests for page-perso/index.html — run them with: node --test page-perso.test.js
// Tests 1 to 5: the skeleton of the page. Tests 6 to 8: the contact form (after the third talk).
// They check the structure of the page; the W3C validator checks the syntax.
// A correct answer written differently passes: single or double quotes, case, order of the attributes.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readExercise, stripHtmlComments, tags } from './css-html-helpers.js';

const html = readExercise('page-perso', 'index.html');
const page = stripHtmlComments(html);
const all = (name) => tags(page, name);

test('squelette 1 : la langue (lang) et l\'encodage UTF-8', () => {
  assert.match(all('html')[0]?.lang ?? '', /^[a-z]{2}/i, 'lang is missing from <html>');
  const utf8 = all('meta').some((m) => /^utf-8$/i.test(m.charset ?? '') || /charset=utf-8/i.test(m.content ?? ''));
  assert.ok(utf8, '<meta charset="utf-8"> is missing');
});

test('squelette 2 : le viewport et un titre de page (title) non vide', () => {
  assert.ok(all('meta').some((m) => /^viewport$/i.test(m.name ?? '')), '<meta name="viewport"> is missing');
  assert.match(page, /<title[^>]*>\s*\S[^<]*<\/title>/i, '<title> is missing or empty');
});

test('squelette 3 : la feuille de style style.css est reliée', () => {
  const linked = all('link').some(
    (l) => (l.rel ?? '').toLowerCase().split(/\s+/).includes('stylesheet') && (l.href ?? '').replace(/^\.\//, '') === 'style.css',
  );
  assert.ok(linked, '<link rel="stylesheet" href="style.css"> is missing');
});

test('squelette 4 : un seul titre h1', () => {
  assert.equal(all('h1').length, 1);
});

test('squelette 5 : header, nav, main et footer présents ; chaque image a un alt', () => {
  for (const tag of ['header', 'nav', 'main', 'footer']) {
    assert.ok(all(tag).length > 0, `<${tag}> is missing`);
  }
  for (const image of all('img')) {
    assert.ok('alt' in image, `image without alt: ${image.src ?? ''}`);
  }
});

test('formulaire 1 : un formulaire avec un bouton d\'envoi', () => {
  assert.ok(all('form').length > 0, '<form> is missing');
  const button = all('button').some((b) => !/^(button|reset)$/i.test(b.type ?? ''));
  const input = all('input').some((i) => /^submit$/i.test(i.type ?? ''));
  assert.ok(button || input, 'submit button is missing');
});

test('formulaire 2 : chaque champ a un label relié par for et id', () => {
  const fields = [...all('input'), ...all('textarea'), ...all('select')].filter(
    (f) => !/^(submit|button|hidden|reset|image)$/i.test(f.type ?? ''),
  );
  const labelled = all('label').map((l) => l.for).filter(Boolean);
  assert.ok(fields.length > 0, 'no input field');
  for (const field of fields) {
    assert.ok(field.id, `field without id: ${field.name ?? field.type ?? ''}`);
    assert.ok(labelled.includes(field.id), `no <label for="${field.id}">`);
  }
});

test('formulaire 3 : annoncé comme non fonctionnel, sans adresse e-mail en clair', () => {
  assert.match(page, /non[\s‑-]fonctionnel/i, 'the words "non fonctionnel" are missing');
  assert.doesNotMatch(html, /mailto:/i);
  // An image name such as avatar@2x.png is not an e-mail address.
  const files = /^(png|jpe?g|gif|svg|webp|avif|ico|css|js|html?|pdf)$/i;
  const emails = [...html.matchAll(/[\w.+-]+@[\w-]+(?:\.[\w-]+)*\.([a-z]{2,})\b/gi)].filter((m) => !files.test(m[1]));
  assert.deepEqual(emails.map((m) => m[0]), [], 'visible e-mail address');
});
