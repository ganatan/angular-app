const cities = require('./cities');
const continents = require('./continents');
const countries = require('./countries');
const genders = require('./genders');
const genres = require('./genres');
const movies = require('./movies');
const persons = require('./persons');
const professions = require('./professions');
const users = require('./users');

async function exportItems(db, param) {
  if (param.endpoint === 'cities') { return await cities.exportItems(db, param); }
  if (param.endpoint === 'continents') { return await continents.exportItems(db, param); }
  if (param.endpoint === 'countries') { return await countries.exportItems(db, param); }
  if (param.endpoint === 'genders') { return await genders.exportItems(db, param); }
  if (param.endpoint === 'genres') { return await genres.exportItems(db, param); }
  if (param.endpoint === 'movies') { return await movies.exportItems(db, param); }
  if (param.endpoint === 'persons') { return await persons.exportItems(db, param); }
  if (param.endpoint === 'professions') { return await professions.exportItems(db, param); }
  if (param.endpoint === 'users') { return await users.exportItems(db, param); }
}

module.exports = {
  exportItems: exportItems,
};

