var fs = require('fs');

function getItemsCount(req, res, next, db) {
  let q = req.query['q'];
  if (q != undefined) {
    q = q.toUpperCase();
  }
  let sql =
    'SELECT' +
    ' count(id) as "count"' +
    ' FROM country' +
    ' WHERE (id >= 1000)';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(name) LIKE \'%' + q + '%\')' +
      ')';
  }
  db.one(sql)
    .then(function (data) {
      res.status(200)
        .json({
          "count": data.count
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItems(req, res, next, db, url) {
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
    ' t1.id' +
    ',t1.name' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ',t1.iso_alpha2 as "isoAlpha2"' +
    ',t1.iso_alpha3 as "isoAlpha3"' +
    ',t1.iso_numeric as "isoNumeric"' +
    ',t1.flag as "flag"' +
    ',t2.name as "continentName"' +
    ',t2.code as "continentCode"' +
    ' FROM country t1' +
    ' LEFT JOIN continent t2 ON t1.continent_id=t2.id' +
    ' WHERE (t1.id > 111)';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(t1.name) LIKE \'%' + q + '%\')' +
      ')';
  }
  sql = sql +
    ' ORDER BY t1.name ASC';
  if ((limit_req != undefined) && (offset_req != undefined)) {
    sql = sql + ' LIMIT ' + limit_req + ' OFFSET ' + offset_req;
  }
  db.any(sql)
    .then(data => {
      let link = "countries";
      var dataTmp = [];
      data.map((row, index, data) => {
        var imgpath = null;
        imgpath = url + link + '/flags/' + data[index].flag;
        dataTmp.push(
          {
            "id": data[index].id,
            "name": data[index].name,
            "wikipediaLink": data[index].wikipediaLink,
            "isoAlpha2": data[index].isoAlpha2,
            "isoAlpha3": data[index].isoAlpha3,
            "isoNumeric": data[index].isoNumeric,
            "flag": data[index].flag,
            "img": imgpath,
            "continent": {
              "name": data[index].continentName,
              "code": data[index].continentCode,
            },
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

function getItem(req, res, next, db, url) {
  var id = parseInt(req.params.id);
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.name' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ',t1.iso_alpha2 as "isoAlpha2"' +
    ',t1.iso_alpha3 as "isoAlpha3"' +
    ',t1.iso_numeric as "isoNumeric"' +
    ',t1.flag as "flag"' +
    ',t2.name as "continentName"' +
    ',t2.code as "continentCode"' +
    ',t2.area as "continentArea"' +
    ',t2.population as "continentPopulation"' +
    ',t2.countries_number as "continentCuntriesNumber"' +
    ' FROM country t1' +
    ' LEFT JOIN continent t2  ON t1.continent_id=t2.id' +
    ' WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (data) {
      let link = "countries";
      var imgpath = null;
      imgpath = url + link + '/flags/' + data.flag;
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
          "img": imgpath,
        });
    })
    .catch(function (err) {
      res.status(200)
        .json({
          "id": null,
          "name": null,
          "wikipediaLink": null,
          "isoAlpha2": null,
          "isoAlpha3": null,
          "isoNumeric": null,
          "flag": null,
          "img": null,
        });
    });
}

function createItem(req, res, next, db, url) {
  let item = {
    name: req.body.name,
    isoAlpha2: req.body.isoAlpha2,
    isoAlpha3: req.body.isoAlpha3,
    isoNumeric: req.body.isoNumeric,
    wikipediaLink: req.body.wikipediaLink,
    flag: req.body.flag,
  }
  let sql =
    'INSERT INTO country' +
    ' (' +
    ' name' +
    ',iso_alpha2' +
    ',iso_alpha3' +
    ',iso_numeric' +
    ',wikipedia_link' +
    ',flag' +
    ' ) VALUES' +
    ' (' +
    ' ${name}' +
    ',${isoAlpha2}' +
    ',${isoAlpha3}' +
    ',${isoNumeric}' +
    ',${wikipediaLink}' +
    ',${flag}' +
    ' ) RETURNING' +
    ' id' +
    ',name' +
    ',flag' +
    ',iso_alpha2 as"isoAlpha2"' +
    ',iso_alpha3 as"isoAlpha3"' +
    ',iso_numeric as"isoNumeric"' +
    ',wikipedia_link as"wikipediaLink"';
  db.one(sql, item)
    .then(function (data) {
      let link = "countries";
      var imgpath = null;
      imgpath = url + link + '/flags/' + data.flag;
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
          "img": imgpath,
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateItem(req, res, next, db, url) {
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
    ',flag as"flag"' +
    ',iso_alpha2 as"isoAlpha2"' +
    ',iso_alpha3 as"isoAlpha3"' +
    ',iso_numeric as"isoNumeric"' +
    ',wikipedia_link as"wikipediaLink"';
  db.one(sql, item)
    .then(function (data) {
      let link = "countries";
      var imgpath = null;
      imgpath = url + link + '/flag/' + data.flag;
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
          "img": imgpath,
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function deleteItem(req, res, next, db) {
  var id = parseInt(req.params.id);
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

function getItemImage(req, res, next, db, tvshow) {
  let poster = './data/images/flags/';
  var options = {
    root: poster,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  var fileName = req.params.name;
  fs.exists(options.root + fileName, function (exists) {
    if (exists) {
    } else {
      fileName = '00.png';
    }
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err);
      } else {
      }
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
