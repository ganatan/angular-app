const fs = require('fs');
const db = require('../db/connection');
const config = require('../config/config.json')[process.env.NODE_ENV || 'dev'];

const url = config.url;
const firstKey = config.firstKey;
const formatDate = config.formatDate;
const limitMax = config.limitMax;
const limitDefault = config.limitDefault;
const webSite = config.webSite;
const dataDirectory = config.dataDirectory;
const queryMax = config.queryMax;
const offsetMax = config.offsetMax;

function getItemsCount(req, res, next) {
  let q = req.query['q'];
  if (q != undefined) { q = q.toUpperCase().substring(0, queryMax); }
  let sql =
    'SELECT' +
    ' count(id) as "count"' +
    ' FROM country' +
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
    ' t1.id' +
    ',t1.name' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ',t1.fr_name as "frName"' +
    ',t1.fr_wikipedia_link as "frWikipediaLink"' +
    ',t1.iso_numeric as "isoNumeric"' +
    ',t1.iso_alpha2 as "isoAlpha2"' +
    ',t1.iso_alpha3 as "isoAlpha3"' +
    ',t1.flag as "flag"' +
    ',t2.id as "continentId"' +
    ',t2.name as "continentName"' +
    ',t2.code as "continentCode"' +
    ' FROM country t1' +
    ' INNER JOIN continent t2 ON t1.continent_id=t2.id' +
    ' WHERE (t1.id >= ' + firstKey + ')';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(t1.name) LIKE \'%' + q + '%\')' +
      ')';
  }
  sql = sql +
    ' ORDER BY t1.name ASC';
  sql = sql + ' LIMIT ' + limit + ' OFFSET ' + offset;
  db.any(sql)
    .then(records => {
      let link = "countries";
      let results = [];
      records.map((row, index, record) => {
        const image = url + '/' + link + '/flags/' + record[index].flag;
        results.push(
          {
            "id": record[index].id,
            "name": record[index].name,
            "wikipediaLink": record[index].wikipediaLink,
            "frName": record[index].frName,
            "frWikipediaLink": record[index].frWikipediaLink,
            "isoAlpha2": record[index].isoAlpha2,
            "isoAlpha3": record[index].isoAlpha3,
            "isoNumeric": record[index].isoNumeric,
            "image": image,
            "continent": {
              "name": record[index].continentName,
              "code": record[index].continentCode,
              "href": url + '/continents/' + record[index].id
            },
            "self": { "href": url + '/' + link + '/' + record[index].id }
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
    ',t1.iso_numeric as "isoNumeric"' +
    ',t1.iso_alpha2 as "isoAlpha2"' +
    ',t1.iso_alpha3 as "isoAlpha3"' +
    ',t1.flag as "flag"' +
    ',t2.name as "continentName"' +
    ',t2.code as "continentCode"' +
    ' FROM country t1' +
    ' INNER JOIN continent t2 ON t1.continent_id=t2.id' +
    ' WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (record) {
      const image = url + '/countries/flags/' + record.flag;
      res.status(200)
        .json({
          "id": record.id,
          "name": record.name,
          "wikipediaLink": record.wikipediaLink,
          "frName": record.frName,
          "frWikipediaLink": record.frWikipediaLink,
          "isoAlpha2": record.isoAlpha2,
          "isoAlpha3": record.isoAlpha3,
          "isoNumeric": record.isoNumeric,
          "image": image,
          "continent": {
            "name": record.continentName,
            "code": record.continentCode,
          },
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
    name: req.body.name,
    wikipediaLink: req.body.wikipediaLink,
    frName: req.body.frName,
    frWikipediaLink: req.body.frWikipediaLink,
    isoAlpha2: req.body.isoAlpha2,
    isoAlpha3: req.body.isoAlpha3,
    isoNumeric: req.body.isoNumeric,
    flag: req.body.flag,
  }
  let sql =
    'INSERT INTO country' +
    ' (' +
    ' name' +
    ',wikipedia_link' +
    ',name' +
    ',fr_wikipedia_link' +
    ',iso_alpha2' +
    ',iso_alpha3' +
    ',iso_numeric' +
    ',flag' +
    ' ) VALUES' +
    ' (' +
    ' ${name}' +
    ',${wikipediaLink}' +
    ',${frName}' +
    ',${frWikipediaLink}' +
    ',${isoAlpha2}' +
    ',${isoAlpha3}' +
    ',${isoNumeric}' +
    ',${flag}' +
    ' ) RETURNING' +
    ' id' +
    ',name' +
    ',wikipedia_link as "wikipediaLink"' +
    ',fr_name as "frName"' +
    ',fr_wikipedia_link as "frWikipediaLink"' +
    ',flag' +
    ',iso_alpha2 as "isoAlpha2"' +
    ',iso_alpha3 as "isoAlpha3"' +
    ',iso_numeric as "isoNumeric"';
  db.one(sql, item)
    .then(function (data) {
      let link = "countries";
      const image = url + link + '/flags/' + data.flag;
      let area = parseInt(data.continentArea);
      let population = parseInt(data.continentPopulation);
      res.status(200)
        .json({
          "id": data.id,
          "name": data.name,
          "wikipediaLink": data.wikipediaLink,
          "isoAlpha2": data.isoAlpha2,
          "isoAlpha3": data.isoAlpha3,
          "isoNumeric": data.isoNumeric,
          "flag": data.flag,
          "image": image,
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateItem(req, res, next) {
  let item = {
    id: req.body.id,
    name: req.body.name,
    isoAlpha2: req.body.isoAlpha2,
    isoAlpha3: req.body.isoAlpha3,
    isoNumeric: req.body.isoNumeric,
    wikipediaLink: req.body.wikipediaLink,
    flag: req.body.flag,
  }
  let sql =
    'UPDATE country SET' +
    ' name=${name}' +
    ',iso_alpha2=${isoAlpha2}' +
    ',iso_alpha3=${isoAlpha3}' +
    ',iso_numeric=${isoNumeric}' +
    ',wikipedia_link=${wikipediaLink}' +
    ',flag=${flag}' +
    ' WHERE id=${id}' +
    ' RETURNING' +
    ' id' +
    ',name' +
    ',flag as "flag"' +
    ',iso_alpha2 as "isoAlpha2"' +
    ',iso_alpha3 as "isoAlpha3"' +
    ',iso_numeric as "isoNumeric"' +
    ',wikipedia_link as "wikipediaLink"';
  db.one(sql, item)
    .then(function (data) {
      let link = "countries";
      const image = url + link + '/flag/' + data.flag;
      let area = parseInt(data.continentArea);
      let population = parseInt(data.continentPopulation);
      res.status(200)
        .json({
          "id": data.id,
          "name": data.name,
          "wikipediaLink": data.wikipediaLink,
          "isoAlpha2": data.isoAlpha2,
          "isoAlpha3": data.isoAlpha3,
          "isoNumeric": data.isoNumeric,
          "flag": data.flag,
          "image": image,
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function deleteItem(req, res, next) {
  let id = parseInt(req.params.id);
  db.result('DELETE FROM country WHERE id = $1', id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} country`
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItemImage(req, res, next) {
  let poster = dataDirectory + '/flags/';
  const options = {
    root: poster,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  let fileName = req.params.name;
  fs.access(options.root + fileName, fs.constants.F_OK, (err) => {
    if (err) { fileName = '00.png'; }
    res.sendFile(fileName, options, function (err) {
      if (err) { next(err); }
    });
  });
};

module.exports = {
  getItemsCount: getItemsCount,
  getItems: getItems,
  getItem: getItem,
  createItem: createItem,
  updateItem: updateItem,
  deleteItem: deleteItem,
  getItemImage: getItemImage,
};
