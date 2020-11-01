const db = require('../db/connection');
const config = require('../config/config.json')[process.env.NODE_ENV || 'dev'];
const fs = require('fs');

const firstKey = config.firstKey;
const formatDate = config.formatDate;
const limitMax = config.limitMax;
const limitDefault = config.limitDefault;
const queryMax = config.queryMax;

function getItemsCount(req, res, next, tvshow) {
  let q = req.query['q'];
  if (q != undefined) { q = q.toUpperCase().substring(0, queryMax); }
  let sql =
    'SELECT' +
    ' count(id) as "count"' +
    ' FROM views' +
    ' WHERE (id >= ' + firstKey + ')';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(code) LIKE \'%' + q + '%\')' +
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

function getItems(req, res, next, tvshow) {
  let q = req.query['q'];
  if (q != undefined) { q = q.toUpperCase().substring(0, queryMax); }

  let limit = parseInt(req.query['limit']);
  let offset = parseInt(req.query['offset']);

  if (isNaN(limit)) { limit = limitDefault; }
  if (isNaN(offset)) { offset = 0; }
  if (limit > limitMax) { limit = limitMax; }
  if (offset > 100000) { offset = 0; }

  let sql =
    'SELECT' +
    ' id' +
    ',code' +
    ',to_char(create_date, \'' + formatDate + '\') as "createDate"' +
    ' FROM views WHERE (id >= ' + firstKey + ')';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(code) LIKE \'%' + q + '%\')' +
      ')';
  }
  sql = sql +
    ' ORDER BY create_date ASC';
  sql = sql + ' LIMIT ' + limit + ' OFFSET ' + offset;
  db.any(sql)
    .then(data => {
      let dataTmp = [];
      data.map((row, index, data) => {
        dataTmp.push(
          {
            "id": data[index].id,
            "code": data[index].code,
            "createDate": data[index].createDate,
          });
      })
      res.status(200)
        .json(dataTmp);
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getItemsCount: getItemsCount,
  getItems: getItems,
};
