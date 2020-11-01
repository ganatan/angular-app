const db = require('../db/connection');
const config = require('../config/config.json')[process.env.NODE_ENV || 'dev'];

const url = config.url;
const firstKey = config.firstKey;

function getItemsCount(req, res, next) {
  let q = req.query['q'];
  if (q != undefined) { q = q.toUpperCase(); }
  let sql =
    'SELECT' +
    ' count(id) as "count"' +
    ' FROM gender' +
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
  let offset_req = req.query['offset'];
  let limit_req = req.query['limit'];
  let limit = 10;
  let offset = 0;
  if ((limit_req == undefined) || (offset_req == undefined)) {
    limit = 10;
    offset = 0;
  }
  let q = req.query['q'];
  if (q != undefined) {
    q = q.toUpperCase();
  }
  let sql =
    'SELECT' +
    ' id' +
    ',name' +
    ' FROM gender' +
    ' WHERE (id >= ' + firstKey + ')';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(name) LIKE \'%' + q + '%\')' +
      ')';
  }
  sql = sql +
    ' ORDER BY name ASC';
  if ((limit_req != undefined) && (offset_req != undefined)) {
    sql = sql + ' LIMIT ' + limit_req + ' OFFSET ' + offset_req;
  }
  db.any(sql)
    .then(records => {
      const link = "genders";
      const results = [];
      records.map((row, index, record) => {
        const area = parseInt(record[index].area);
        const population = parseInt(record[index].population);
        results.push(
          {
            "id": record[index].id,
            "name": record[index].name,
            "links":
              [{
                "rel": "self",
                "href": url + link + '/' + record[index].id
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
  const id = parseInt(req.params.id);
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.name' +
    ' FROM gender t1' +
    ' WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (record) {
      let area = parseInt(record.area);
      let population = parseInt(record.population);
      res.status(200)
        .json({
          "id": record.id,
          "name": record.name,
        });
    })
    .catch(function (err) {
      res.status(200)
        .json({
          "id": null,
          "name": null,
          "code": null,
          "wikipediaLink": null,
          "frenchName": null,
          "area": null,
          "population": null,
          "countriesNumber": null,
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
    'INSERT INTO gender' +
    ' (' +
    ' name' +
    ' ) VALUES' +
    ' (' +
    ' ${name}' +
    ' ) RETURNING' +
    ' id' +
    ',name'
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
    name: req.body.name,
    code: req.body.code,
    area: req.body.area,
    wikipediaLink: req.body.wikipediaLink,
    population: req.body.population,
    frenchName: req.body.frenchName,
    countriesNumber: req.body.countriesNumber,
  }
  let sql =
    'UPDATE gender SET' +
    ' name=${name}' +
    ' WHERE id=${id}' +
    ' RETURNING' +
    ' id' +
    ',name';
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
  db.result('DELETE FROM gender WHERE id = $1', id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} gender`
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
