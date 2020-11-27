const db = require('../db/connection');
const config = require('../config/config.json')[process.env.NODE_ENV || 'dev'];

const url = config.url;
const firstKey = config.firstKey;
const limitMax = config.limitMax;
const limitDefault = config.limitDefault;
const webSite = config.webSite;
const queryMax = config.queryMax;
const offsetMax = config.offsetMax;

function getItemsCount(req, res, next) {
  let q = req.query['q'];
  if (q != undefined) { q = q.toUpperCase().substring(0, queryMax); }
  let sql =
    'SELECT' +
    ' count(id) as "count"' +
    ' FROM continent' +
    ' WHERE (id >= ' + firstKey + ')';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(name) LIKE \'%' + q + '%\')' +
      ')';
  }
  db.one(sql)
    .then(function (record) {
      res.status(200)
        .json({ "count": record.count });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItems(req, res, next) {
  let q = req.query['q'];
  if (q != undefined) { q = q.toUpperCase().substring(0, queryMax); }

  let limit = parseInt(req.query['limit']);
  let offset = parseInt(req.query['offset']);

  if (isNaN(limit)) { limit = limitDefault; }
  if (isNaN(offset)) { offset = 0; }
  if (limit > limitMax) { limit = limitMax; }
  if (offset > offsetMax) { offset = 0; }

  let sql =
    'SELECT' +
    ' id' +
    ',code' +
    ',name' +
    ',wikipedia_link as "wikipedialink"' +
    ',fr_name as "frName"' +
    ',fr_wikipedia_link as "frWikipediaLink"' +
    ',area' +
    ',population' +
    ',countries_number as "countriesNumber"' +
    ' FROM continent' +
    ' WHERE (id >= ' + firstKey + ')';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(name) LIKE \'%' + q + '%\')' +
      ')';
  }
  sql = sql + ' ORDER BY name ASC';
  sql = sql + ' LIMIT ' + limit + ' OFFSET ' + offset;

  db.any(sql)
    .then(records => {
      const results = [];
      records.map((row, index, record) => {
        const area = parseInt(record[index].area);
        const population = parseInt(record[index].population);
        results.push(
          {
            "id": record[index].id,
            "code": record[index].code,
            "name": record[index].name,
            "wikipediaLink": record[index].wikipedialink,
            "frName": record[index].frName,
            "frWikipediaLink": record[index].frWikipediaLink,
            "area": area,
            "population": population,
            "countriesNumber": record[index].countriesNumber,
            "links":
              [{
                "rel": "self",
                "href": url + '/continents/' + record[index].id
              }]
          });
      })
      res.status(200)
        .json(results);
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItem(req, res, next) {
  let id = parseInt(req.params.id);
  if (isNaN(id)) { id = 0; }
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.code' +
    ',t1.name' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ',t1.fr_name as "frName"' +
    ',t1.fr_wikipedia_link as "frWikipediaLink"' +
    ',t1.area' +
    ',t1.population' +
    ',t1.countries_number as "countriesNumber"' +
    ' FROM continent t1' +
    ' WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (record) {
      let area = parseInt(record.area);
      let population = parseInt(record.population);
      res.status(200)
        .json({
          "id": record.id,
          "code": record.code,
          "name": record.name,
          "wikipediaLink": record.wikipediaLink,
          "frName": record.frName,
          "frWikipediaLink": record.frWikipediaLink,
          "area": area,
          "population": population,
          "countriesNumber": record.countriesNumber,
        });
    })
    .catch(function (err) {
      res.status(404)
        .json({
          message: "Not Found",
          documentationUrl: webSite
        });
    });
}

function createItem(req, res, next) {
  let item = {
    code: req.body.code,
    name: req.body.name,
    wikipediaLink: req.body.wikipediaLink,
    frName: req.body.frName,
    frWikipediaLink: req.body.frWikipediaLink,
    area: req.body.area,
    population: req.body.population,
    countriesNumber: req.body.countriesNumber,
  }
  let sql =
    'INSERT INTO continent' +
    ' (' +
    ' code' +
    ',name' +
    ',wikipedia_link' +
    ',fr_name' +
    ',fr_wikipedia_link' +
    ',area' +
    ',population' +
    ',countries_number' +
    ' ) VALUES' +
    ' (' +
    ' ${code}' +
    ',${name}' +
    ',${wikipediaLink}' +
    ',${frName}' +
    ',${frWikipediaLink}' +
    ',${area}' +
    ',${population}' +
    ',${countriesNumber}' +
    ' ) RETURNING' +
    ' id' +
    ',code' +
    ',name' +
    ',wikipedia_link as "wikipediaLink"' +
    ',fr_name as "frName"' +
    ',fr_wikipedia_link as "frWikipediaLink"' +
    ',area' +
    ',population' +
    ',countries_number as "countriesNumber"';
  db.one(sql, item)
    .then(function (result) {
      res.status(201)
        .json(result);
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateItem(req, res, next) {
  let item = {
    id: req.body.id,
    code: req.body.code,
    name: req.body.name,
    wikipediaLink: req.body.wikipediaLink,
    frName: req.body.frName,
    frWikipediaLink: req.body.frWikipediaLink,
    area: req.body.area,
    population: req.body.population,
    countriesNumber: req.body.countriesNumber,
  }
  let sql =
    'UPDATE continent SET' +
    ' code=${code}' +
    ', name=${name}' +
    ',wikipedia_link=${wikipediaLink}' +
    ',fr_name=${frName}' +
    ',fr_wikipedia_link=${frWikipediaLink}' +
    ',area=${area}' +
    ',population=${population}' +
    ',countries_number=${countriesNumber}' +
    ' WHERE id=${id}' +
    ' RETURNING' +
    ' id' +
    ',code' +
    ',name' +
    ',wikipedia_link as "wikipediaLink"' +
    ',fr_name as "frName"' +
    ',fr_wikipedia_link as "frWikipediaLink"' +
    ',area' +
    ',population' +
    ',countries_number as "countriesNumber"';
  db.one(sql, item).then(function (result) {
    res.status(200)
      .json(result);
  })
    .catch(function (err) {
      return next(err);
    });
}

function deleteItem(req, res, next) {
  const id = parseInt(req.params.id);
  db.result('DELETE FROM continent WHERE id = $1', id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} continent`
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getCountries(req, res, next) {
  let id = parseInt(req.params.id);
  if (isNaN(id)) { id = 0; }
  let sql =
    'SELECT' +
    ' t1.id as "id"' +
    ',t1.name as "name"' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ',t2.id as "countryId"' +
    ',t2.name as "countryName"' +
    ',t2.wikipedia_link as "countryWikipediaLink"' +
    ' FROM continent t1' +
    ' INNER JOIN country t2 ON t2.continent_id=t1.id' +
    ' WHERE (t1.id = $1)' +
    ' ORDER BY t2.name ASC'
  db.any(sql, id)
    .then(records => {
      let id = 0;
      let name = '0000';
      if (records[0] != null) {
        id = records[0].id;
        name = records[0].name;
      }
      const results = [];
      records.map((row, index, record) => {
        results.push(
          {
            "id": record[index].countryId,
            "name": record[index].countryName,
          });
      })
      result = {
        "id": id,
        "name": name,
        "countries": results
      };
      res.status(200)
        .json(result);
    })
    .catch(function (err) {
      res.status(404)
        .json({
          message: "Not Found",
          documentationUrl: webSite
        });
    });
}

module.exports = {
  getItemsCount: getItemsCount,
  getItems: getItems,
  getItem: getItem,
  createItem: createItem,
  updateItem: updateItem,
  deleteItem: deleteItem,
  getCountries: getCountries,
};
