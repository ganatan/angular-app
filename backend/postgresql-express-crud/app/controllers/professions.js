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
    ' FROM profession' +
    ' WHERE (id >= ' + firstKey + ')';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(name) LIKE \'%' + q + '%\')' +
      ')';
  }
  db.one(sql)
    .then(function (result) {
      res.status(200)
        .json({ "count": result.count });
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
    ',name' +
    ',wikipedia_link as "wikipediaLink"' +
    ',fr_name as "frName"' +
    ',fr_wikipedia_link as "frWikipediaLink"' +
    ' FROM profession' +
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
            "name": record[index].name,
            "wikipediaLink": record[index].wikipediaLink,
            "frName": record[index].frName,
            "frWikipediaLink": record[index].frWikipediaLink,
            "links":
              [{
                "rel": "self",
                "href": url + '/professions/' + record[index].id
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
    ',t1.name' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ',t1.fr_name as "frName"' +
    ',t1.fr_wikipedia_link as "frWikipediaLink"' +
    ' FROM profession t1' +
    ' WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (record) {
      let area = parseInt(record.area);
      let population = parseInt(record.population);
      res.status(200)
        .json({
          "id": record.id,
          "name": record.name,
          "wikipediaLink": record.wikipediaLink,
          "frName": record.frName,
          "frWikipediaLink": record.frWikipediaLink,
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
    'INSERT INTO profession' +
    ' (' +
    ' name' +
    ',wikipedia_link' +
    ',fr_name' +
    ',fr_wikipedia_link' +
    ' ) VALUES' +
    ' (' +
    ' ${name}' +
    ',${wikipediaLink}' +
    ',${frName}' +
    ',${frWikipediaLink}' +
    ' ) RETURNING' +
    ' id' +
    ',name' +
    ',wikipedia_link as "wikipediaLink"' +
    ',fr_name as "frName"' +
    ',fr_wikipedia_link as "frWikipediaLink"';
  db.one(sql, item)
    .then(function (result) {
      res.status(200)
        .json(result);
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateItem(req, res, next) {
  let item = {
    id: req.body.id,
    name: req.body.name,
    code: req.body.code,
    area: req.body.area,
    wikipediaLink: req.body.wikipediaLink,
    population: req.body.population,
    frenchName: req.body.frenchName,
    countriesNumber: req.body.countriesNumber,
  }
  let sql =
    'UPDATE profession SET' +
    ' name=${name}' +
    ',wikipedia_link=${wikipediaLink}' +
    ',population=${population}' +
    ',french_name=${frenchName}' +
    ',countries_number=${countriesNumber}' +
    ' WHERE id=${id}' +
    ' RETURNING' +
    ' id' +
    ',name' +
    ',code' +
    ',area' +
    ',wikipedia_link as "wikipediaLink"' +
    ',population' +
    ',french_name as "frenchName"' +
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
  db.result('DELETE FROM profession WHERE id = $1', id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} profession`
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
  getItemsCount: getItemsCount,
  getItems: getItems,
  getItem: getItem,
  createItem: createItem,
  updateItem: updateItem,
  deleteItem: deleteItem,
};
