const cities = require('./cities');
const companies = require('./companies');
const continents = require('./continents');
const countries = require('./countries');
const genders = require('./genders');
const genres = require('./genres');
const movies = require('./movies');
const persons = require('./persons');
const professions = require('./professions');
const trailers = require('./trailers');
const users = require('./users');
const views = require('./views');

async function createItem(db, param, item, index) {
  if (param.endpoint === 'cities') { return await cities.createItem(db, param, item, index); }
  if (param.endpoint === 'companies') { return await companies.createItem(db, param, item, index); }
  if (param.endpoint === 'continents') { return await continents.createItem(db, param, item, index); }
  if (param.endpoint === 'countries') { return await countries.createItem(db, param, item, index); }
  if (param.endpoint === 'genders') { return await genders.createItem(db, param, item, index); }
  if (param.endpoint === 'genres') { return await genres.createItem(db, param, item, index); }
  if (param.endpoint === 'movies') { return await movies.createItem(db, param, item, index); }
  if (param.endpoint === 'persons') { return await persons.createItem(db, param, item, index); }
  if (param.endpoint === 'professions') { return await professions.createItem(db, param, item, index); }
  if (param.endpoint === 'trailers') { return await trailers.createItem(db, param, item, index); }
  if (param.endpoint === 'users') { return await users.createItem(db, param, item, index); }
  if (param.endpoint === 'views') { return await views.createItem(db, param, item, index); }
}

module.exports = {
  createItem: createItem,
};
