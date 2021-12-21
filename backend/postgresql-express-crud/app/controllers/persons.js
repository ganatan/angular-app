const db = require('../db/connection');
const config = require('../config/config.json')[process.env.NODE_ENV || 'dev'];
const fs = require('fs');

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
    ' FROM movie' +
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
    ',t1.fr_name as "fr_name"' +
    ',t1.fr_wikipedia_link as "frWikipediaLink"' +
    ',to_char(t1.birth_date, \'' + formatDate + '\') as "birthDate"' +
    ',to_char(t1.death_date, \'' + formatDate + '\') as "deathDate"' +
    ',t1.image as "image"' +
    ' FROM person t1 WHERE (t1.id >= ' + firstKey + ')';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(t1.name) LIKE \'%' + q + '%\')' +
      ')';
  }
  sql = sql + ' ORDER BY t1.name ASC';
  sql = sql + ' LIMIT ' + limit + ' OFFSET ' + offset;

  db.any(sql)
    .then(records => {
      let link = "persons";
      let results = [];
      records.map((row, index, record) => {
        let image = url + '/' + link + '/img/' + record[index].image;
        results.push(
          {
            "id": record[index].id,
            "name": record[index].name,
            "wikipediaLink": record[index].wikipediaLink,
            "frName": record[index].frName,
            "frWikipediaLink": record[index].frWikipediaLink,
            "birthDate": record[index].birthDate,
            "deathDate": record[index].deathDate,
            "image": image,
            "links":
              [{
                "rel": "self",
                "href": url + '/' + link + '/' + record[index].id
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

function getItem(req, res, next, tvshow) {
  let id = parseInt(req.params.id);
  if (isNaN(id)) { id = 0; }
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.name' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ' FROM person t1 WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (data) {
      res.status(200)
        .json({
          "id": data.id,
          "name": data.name,
          "wikipediaLink": data.wikipediaLink,
        });
    })
    .catch(function (err) {
      console.log('0001:' + err);
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
  }
  let sql =
    'INSERT INTO person' +
    ' (' +
    ' name' +
    ',wikipedia_link' +
    ' ) VALUES' +
    ' (' +
    ' ${name}' +
    ',${wikipediaLink}' +
    ' ) RETURNING' +
    ' id' +
    ',name' +
    ',wikipedia_link as "wikipediaLink"';
  db.one(sql, item)
    .then(function (data) {
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateItem(req, res, next) {
  let item = {
    id: req.params.id,
    name: req.body.name,
    wikipediaLink: req.body.wikipediaLink,
  }
  let sql =
    'UPDATE person SET' +
    ' name=${name}' +
    ',wikipedia_link=${wikipediaLink}' +
    ' WHERE id=${id}' +
    ' RETURNING' +
    ' id' +
    ',name' +
    ',wikipedia_link as "wikipediaLink"';
  db.one(sql, item).then(function (data) {
    res.status(200)
      .json(data);
  })
    .catch(function (err) {
      return next(err);
    });
}

function deleteItem(req, res, next) {
  const id = parseInt(req.params.id);
  db.result('DELETE FROM person WHERE id = $1', id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} person`
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItemImage(req, res, next) {
  let images = dataDirectory + '/persons/';
  const options = {
    root: images,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  let fileName = req.params.name;
  fs.access(options.root + fileName, fs.constants.F_OK, (err) => {
    if (err) { fileName = '0000.jpg'; }
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
  getItemImage:getItemImage,
};

