function getItemsCount(req, res, next, db) {
  let q = req.query['q'];
  if (q != undefined) {
    q = q.toUpperCase();
  }
  let sql =
    'SELECT' +
    ' count(id) as "count"' +
    ' FROM continent' +
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
        .json({ "count": data.count });
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
    ' id' +
    ',name' +
    ',code' +
    ',wikipedia_link as "wikipediaLink"' +
    ',french_name as "frenchName"' +
    ',area' +
    ',population' +
    ',countries_number as "countriesNumber"' +
    ' FROM continent' +
    ' WHERE (id > 111)';
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
    .then(data => {
      let link = "continents";
      var dataTmp = [];
      let population;
      let area;
      data.map((row, index, data) => {
        area = parseInt(data[index].area);
        population = parseInt(data[index].population);
        dataTmp.push(
          {
            "id": data[index].id,
            "name": data[index].name,
            "code": data[index].code,
            "wikipediaLink": data[index].wikipediaLink,
            "frenchName": data[index].frenchName,
            "area": area,
            "population": population,
            "countriesNumber": data[index].countriesNumber,
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

function getItem(req, res, next, db) {
  var id = parseInt(req.params.id);
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.name' +
    ',t1.code' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ',t1.french_name as "frenchName"' +
    ',t1.area' +
    ',t1.population' +
    ',t1.countries_number as "countriesNumber"' +
    ' FROM continent t1' +
    ' WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (data) {
      let area = parseInt(data.area);
      let population = parseInt(data.population);
      res.status(200)
        .json({
          "id": data.id,
          "name": data.name,
          "code": data.code,
          "wikipediaLink": data.wikipediaLink,
          "frenchName": data.frenchName,
          "area": area,
          "population": population,
          "countriesNumber": data.countriesNumber,
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

function createItem(req, res, next, db) {
  let item = {
    name: req.body.name,
    code: req.body.code,
    area: req.body.area,
    wikipediaLink: req.body.wikipediaLink,
    population: req.body.population,
    frenchName: req.body.frenchName,
    countriesNumber: req.body.countriesNumber,
  }
  let sql =
    'INSERT INTO continent' +
    ' (' +
    ' name' +
    ',code' +
    ',area' +
    ',population' +
    ',wikipedia_link' +
    ',french_name' +
    ',countries_number' +
    ' ) VALUES' +
    ' (' +
    ' ${name}' +
    ',${code}' +
    ',${area}' +
    ',${population}' +
    ',${wikipediaLink}' +
    ',${frenchName}' +
    ',${countriesNumber}' +
    ' ) RETURNING' +
    ' id' +
    ',code' +
    ',name' +
    ',area' +
    ',population' +
    ',wikipedia_link as"wikipediaLink"' +
    ',french_name as"frenchName"' +
    ',countries_number as "countriesNumber"';
  db.one(sql, item)
    .then(function (data) {
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateItem(req, res, next, db) {
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
    'UPDATE continent SET' +
    ' name=${name}' +
    ',code=${code}' +
    ',area=${area}' +
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
    ',wikipedia_link as"wikipediaLink"' +
    ',population' +
    ',french_name as"frenchName"' +
    ',countries_number as "countriesNumber"';
  db.one(sql, item).then(function (data) {
    res.status(200)
      .json(data);
  })
    .catch(function (err) {
      return next(err);
    });
}

function deleteItem(req, res, next, db) {
  var id = parseInt(req.params.id);
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

module.exports = {
  getItemsCount: getItemsCount,
  getItems: getItems,
  getItem: getItem,
  createItem: createItem,
  updateItem: updateItem,
  deleteItem: deleteItem,
};
