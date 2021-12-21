const db = require('../db/connection');
const config = require('../config/config.json')[process.env.NODE_ENV || 'dev'];

const url = config.url;
const firstKey = config.firstKey;

function getItemsCount(req, res, next) {
  let q = req.query['q'];
  if (q != undefined) {
    q = q.toUpperCase();
  }
  let sql =
    'SELECT' +
    ' count(id) as "count"' +
    ' FROM trailer' +
    ' WHERE (id >= ' + firstKey + ')';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(name) LIKE \'%' + q + '%\')' +
      ')';
  }
  db.one(sql)
    .then(function (data) {
      res.status(200)
        .json({ "count": data.count });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItems(req, res, next) {
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.code' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ' FROM genre t1';
  db.any(sql)
    .then(data => {
      let link = "genres";
      let dataTmp = [];
      data.map((row, index, data) => {
        dataTmp.push(
          {
            "id": data[index].id,
            "name": data[index].name,
            "releaseDate": data[index].releaseDate,
            "wikipediaLink": data[index].wikipediaLink,
            "links":
              [{
                "rel": "self",
                "href": url + link + '/' + data[index].id
              }]
          });
      })
      res.status(200)
        .json(dataTmp);
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItem(req, res, next, tvshow) {
  const id = parseInt(req.params.id);
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.name' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ' FROM genre t1 WHERE (t1.id = $1)';
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
      res.status(200)
        .json({
          "id": null,
          "name": null,
          "wikipediaLink": null,
        });
    });
}

function createItem(req, res, next) {
  let item = {
    name: req.body.name,
    wikipediaLink: req.body.wikipediaLink,
  }
  let sql =
    'INSERT INTO genre' +
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
    'UPDATE genre SET' +
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
  db.result('DELETE FROM genre WHERE id = $1', id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} genre`
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

