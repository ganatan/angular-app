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
    ' FROM users' +
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
    ',t1.password as "password"' +
    ' FROM users t1' +
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
    .then(data => {
      let dataTmp = [];
      data.map((row, index, data) => {
        dataTmp.push(
          {
            "id": data[index].id,
            "name": data[index].name,
            "password": data[index].password,
            "links":
              [{
                "rel": "self",
                "href": url + '/users/' + data[index].id
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
  let id = parseInt(req.params.id);
  if (isNaN(id)) { id = 0; }
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.name' +
    ',t1.password as "password"' +
    ' FROM users t1 WHERE (t1.id = $1)';
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
    'INSERT INTO users' +
    ' (' +
    ' name' +
    ',password' +
    ' ) VALUES' +
    ' (' +
    ' ${name}' +
    ',${password}' +
    ' ) RETURNING' +
    ' id' +
    ',name' +
    ',password as "password"';
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
    id: req.body.id,
    name: req.body.name,
    wikipediaLink: req.body.wikipediaLink,
  }
  let sql =
    'UPDATE users SET' +
    ' name=${name}' +
    ',password=${password}' +
    ' WHERE id=${id}' +
    ' RETURNING' +
    ' id' +
    ',name' +
    ',password as "password"';
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
  db.result('DELETE FROM users WHERE id = $1', id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} user`
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

