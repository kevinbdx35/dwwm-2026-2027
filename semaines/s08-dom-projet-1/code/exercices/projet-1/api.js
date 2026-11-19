// Builds the address of the API request. Already written: do not change this file.
// Used from week 9 (fetch). Until then, the page reads the frozen copy, data/musees-bretagne.js.
// API: data.gouv.fr tabular API, "Répertoire des Musées de France : base Muséofile" (Licence Ouverte 2.0).

const RESOURCE_ID = '5ccd6238-4fb0-4b2c-b14a-581909489320';
const API_BASE = `https://tabular-api.data.gouv.fr/api/resources/${RESOURCE_ID}/data/`;

// The regions of the data set, written exactly as in the data.
export const REGIONS = [
  'Auvergne-Rhône-Alpes',
  'Bourgogne-Franche-Comté',
  'Bretagne',
  'Centre-Val de Loire',
  'Corse',
  'Grand Est',
  'Hauts-de-France',
  'Normandie',
  'Nouvelle-Aquitaine',
  'Occitanie',
  'Pays-de-la-Loire',
  "Provence-Alpes-Côte-d'Azur",
  "Territoires et départements d'outre-mer",
  'Île-de-France',
];

// The backup copy, in the same format as the API answer: { data, links, meta }.
// Use it if the API does not answer (and on the day of the oral defence).
export const BACKUP_URL = './data/musees-bretagne.json';

/**
 * Returns the address that asks the API for every museum of one region.
 * An unknown region is replaced by 'Bretagne': the request is always well formed.
 * Every region has fewer than 200 museums, so one page is enough.
 * @param {string} [region]
 * @returns {string}
 */
export function buildMuseumsUrl(region = 'Bretagne') {
  const safeRegion = REGIONS.includes(region) ? region : 'Bretagne';
  const params = new URLSearchParams({ Region__exact: safeRegion, page_size: '200' });
  return `${API_BASE}?${params}`;
}
