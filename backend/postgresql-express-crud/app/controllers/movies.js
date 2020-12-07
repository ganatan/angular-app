const db = require('../db/connection');
const config = require('../config/config.json')[process.env.NODE_ENV || 'dev'];
const fs = require('fs');

const url = config.url;
const firstKey = config.firstKey;
const formatDate = config.formatDate;
const formatTime = config.formatTime;
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
  sql = sql + ' AND (movie = true)';
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
    ',to_char(t1.release_date, \'' + formatDate + '\') as "releaseDate"' +
    ',to_char(t1.running_time, \'' + formatTime + '\') as "runningTime"' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ',t1.fr_name as "frName"' +
    ',t1.fr_wikipedia_link as "frWikipediaLink"' +
    ',t1.franchise as "franchise"' +
    ',t1.domestic as "domestic"' +
    ',t1.international as "international"' +
    ',t1.worldwide as "worldwide"' +
    ',t1.budget as "budget"' +
    ',t1.image as "image"' +
    ' FROM movie t1 WHERE (t1.id >= ' + firstKey + ')';
  sql = sql + ' AND (t1.movie = true)';
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
      let link = "movies";
      let results = [];
      records.map((row, index, record) => {
        let image = url + '/' + link + '/img/' + record[index].image;
        results.push(
          {
            "id": record[index].id,
            "name": record[index].name,
            "releaseDate": record[index].releaseDate,
            "runningTime": record[index].runningTime,
            "frName": record[index].frName,
            "frWikipediaLink": record[index].frWikipediaLink,
            "wikipediaLink": record[index].wikipediaLink,
            "franchise": record[index].franchise,
            "domestic": parseInt(record[index].domestic),
            "international": parseInt(record[index].international),
            "worldwide": parseInt(record[index].worldwide),
            "budget": parseInt(record[index].budget),
            "image": image,
            "links":
              [
                {
                  "rel": "self",
                  "href": url + '/' + link + '/' + record[index].id
                },
              ]
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
    ',to_char(t1.release_date, \'' + formatDate + '\') as "releaseDate"' +
    ',to_char(t1.running_time, \'' + formatTime + '\') as "runningTime"' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ',t1.fr_name as "frName"' +
    ',t1.fr_wikipedia_link as "frWikipediaLink"' +
    ',t1.image as "image"' +
    ',t1.franchise as "franchise"' +
    ',t1.domestic as "domestic"' +
    ',t1.international as "international"' +
    ',t1.worldwide as "worldwide"' +
    ',t1.budget as "budget"' +
    ' FROM movie t1' +
    ' WHERE (t1.id = $1)';
  sql = sql + ' AND (t1.movie = true)';

  db.one(sql, id)
    .then(function (record) {
      let image = url + '/movies/img/' + record.image;
      res.status(200)
        .json({
          "id": record.id,
          "name": record.name,
          "releaseDate": record.releaseDate,
          "runningTime": record.runningTime,
          "frName": record.frName,
          "frWikipediaLink": record.frWikipediaLink,
          "wikipediaLink": record.wikipediaLink,
          "franchise": record.franchise,
          "domestic": parseInt(record.domestic),
          "international": parseInt(record.international),
          "worldwide": parseInt(record.worldwide),
          "budget": parseInt(record.budget),
          "image": image
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
    image: req.body.image,
    tvshow: false,
    movie: true,
  }
  let sql =
    'INSERT INTO movie' +
    ' (' +
    ' name' +
    ',wikipedia_link' +
    ',image' +
    ',tvshow' +
    ',movie' +
    ' ) VALUES' +
    ' (' +
    ' ${name}' +
    ',${wikipediaLink}' +
    ',${image}' +
    ',${tvshow}' +
    ',${movie}' +
    ' ) RETURNING' +
    ' id' +
    ',name' +
    ',release_date as "releaseDate"' +
    ',wikipedia_link as "wikipediaLink"' +
    ',image as "image"' +
    ',tvshow' +
    ',movie';
  db.one(sql, item)
    .then(function (record) {
      res.status(200)
        .json({
          "id": record.id,
          "name": record.name,
          "releaseDate": record.releaseDate,
          "image": record.image,
          "img": null,
          "tvshow": record.tvshow,
          "movie": record.movie,
          "wikipediaLink": record.wikipediaLink,
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateItem(req, res, next) {
  let item = {
    id: req.params.id,
    name: req.body.name,
    tvshow: req.body.tvshow,
    movie: req.body.movie,
    wikipediaLink: req.body.wikipediaLink,
    image: req.body.image,
  }
  let sql =
    'UPDATE movie SET' +
    ' name=${name}' +
    ',tvshow=${tvshow}' +
    ',movie=${movie}' +
    ',wikipedia_link=${wikipediaLink}' +
    ',image=${image}' +
    ' WHERE id=${id}' +
    ' RETURNING' +
    ' id' +
    ',name' +
    ',release_date as "releaseDate"' +
    ',wikipedia_link as "wikipediaLink"' +
    ',image as "image"' +
    ',tvshow' +
    ',movie';
  db.one(sql, item).then(function (record) {
    res.status(200)
      .json({
        "id": record.id,
        "name": record.name,
        "releaseDate": record.releaseDate,
        "image": record.image,
        "img": null,
        "tvshow": record.tvshow,
        "movie": record.movie,
        "wikipediaLink": record.wikipediaLink,
      });
  })
    .catch(function (err) {
      return next(err);
    });
}

function deleteItem(req, res, next) {
  let id = parseInt(req.params.id);
  if (isNaN(id)) { id = 0; }
  db.result('DELETE FROM movie WHERE id = $1', id)
    .then(function (result) {
      if (result.rowCount === 1) {
        res.status(200)
          .json({
            status: 'success',
            message: `Removed ${result.rowCount} movie`
          });
      } else {
        res.status(204)
          .json({
            status: 'Not Found',
            documentationUrl: webSite
          });
      }
    })
    .catch(function (err) {
      res.status(404)
        .json({
          message: "Not Found",
          documentationUrl: webSite
        });
    });
}

function getItemImage(req, res, next) {
  let images = dataDirectory + '/movies/';
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

function getItemActors(req, res, next) {
  let id = parseInt(req.params.id);
  if (isNaN(id)) { id = 0; }
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.name' +
    ',to_char(t1.release_date, \'' + formatDate + '\') as "releaseDate"' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ',t1.image as "image"' +
    ' FROM movie t1 WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (record) {
      let link = "movies";
      let image = url + '/' + link + '/img/' + record.image;
      res.status(200)
        .json({
          "id": record.id,
          "name": record.name,
          "releaseDate": record.releaseDate,
          "wikipediaLink": record.wikipediaLink,
          "image": image,
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

function getItemTrailers(req, res, next) {
  let id = parseInt(req.params.id);
  if (isNaN(id)) { id = 0; }
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.name' +
    ',to_char(t1.release_date, \'' + formatDate + '\') as "releaseDate"' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ',t1.image as "image"' +
    ' FROM movie t1 WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (record) {
      let link = "movies";
      let image = url + '/' + link + '/img/' + record.image;
      res.status(200)
        .json({
          "id": record.id,
          "name": record.name,
          "releaseDate": record.releaseDate,
          "wikipediaLink": record.wikipediaLink,
          "image": image,
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

module.exports = {
  getItemsCount: getItemsCount,
  getItems: getItems,
  getItem: getItem,
  createItem: createItem,
  updateItem: updateItem,
  deleteItem: deleteItem,
  getItemImage: getItemImage,
  getItemActors: getItemActors,
  getItemTrailers: getItemTrailers,
};
