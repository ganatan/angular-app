function getItemsCount(req, res, next, db) {
  let q = req.query['q'];
  if (q != undefined) {
    q = q.toUpperCase();
  }
  let sql =
    'SELECT' +
    ' count(id) as "count"' +
    ' FROM city' +
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
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.name' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ',t1.capital' +
    ',t2.name as "countryName"' +
    ',t2.iso_alpha2 as "countryCode"' +
    ',t2.flag as "countryFlag"' +
    ',t3.name as "continentName"' +
    ',t3.code as "continentCode"' +
    ' FROM city t1' +
    ' INNER JOIN country t2 ON t1.country_id=t2.id' +
    ' INNER JOIN continent t3 ON t2.continent_id=t3.id' +
    ' WHERE (t1.id > 111)';
  ' ORDER BY t1.name ASC'
  db.any(sql)
    .then(data => {
      let link = "cities";
      var dataTmp = [];
      data.map((row, index, data) => {
        var imgpath = null;
        imgpath = url + 'countries' + '/flags/' + data[index].countryFlag;
        dataTmp.push(
          {
            "id": data[index].id,
            "name": data[index].name,
            "wikipediaLink": data[index].wikipediaLink,
            "capital": data[index].capital,
            "img": imgpath,
            "country": {
              "name": data[index].countryName,
              "code": data[index].countryCode,
            },
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
    ',t1.capital' +
    ',t2.name as "countryName"' +
    ',t2.flag as "flag"' +
    ',t2.iso_alpha2 as "countryIsoAlpha2"' +
    ',t2.iso_alpha3 as "countryIsoAlpha3"' +
    ',t2.iso_numeric as "countryIsoNumeric"' +
    ',t2.flag as "countryFlag"' +
    ',t3.name as "continentName"' +
    ',t3.code as "continentCode"' +
    ',t3.area as "continentArea"' +
    ',t3.population as "continentPopulation"' +
    ',t3.countries_number as "continentCountriesNumber"' +
    ' FROM city t1' +
    ' INNER JOIN country t2 ON t1.country_id=t2.id' +
    ' INNER JOIN continent t3 ON t2.continent_id=t3.id' +
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
          "capital": data.capital,
          "img": imgpath,
/*          "country": {
            "name": data.countryName,
            "code": data.countryCode,
            "isoAlpha2": data.countryIsoAlpha2,
            "isoAlpha3": data.countryIsoAlpha3,
            "isoNumeric": data.countryIsoNumeric,
          },
          "continent": {
            "name": data.continentName,
            "code": data.continentCode,
            "area": area,
            "population": population,
            "countriesNumber": data.continentCountriesNumber,
          },*/
        });
    })
    .catch(function (err) {
      res.status(200)
        .json({
          "id": null,
          "name": null,
          "wikipediaLink": null,
          "capital": null,
          "flag": null,
          "country": {
            "name": null,
            "code": null,
            "isoAlpha2": null,
            "isoAlpha3": null,
            "isoNumeric": null,
          },
          "continent": {
            "name": null,
            "code": null,
            "area": null,
            "population": null,
            "countriesNumber": null,
          },
        });
    });
}

function createItem(req, res, next, db, url) {
  let item = {
    name: req.body.name,
    capital: req.body.capital,
    wikipediaLink: req.body.wikipediaLink,
  }
  let sql =
    'INSERT INTO city' +
    ' (' +
    ' name' +
    ',capital' +
    ',wikipedia_link' +
    ' ) VALUES' +
    ' (' +
    ' ${name}' +
    ',${capital}' +
    ',${wikipediaLink}' +
    ' ) RETURNING' +
    ' id' +
    ',name' +
    ',capital' +
    ',wikipedia_link as"wikipediaLink"';
  db.one(sql, item)
    .then(function (data) {
      res.status(200)
        .json({
          "id": data.id,
          "name": data.name,
          "wikipediaLink": data.wikipediaLink,
          "capital": data.capital,
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
    wikipediaLink: req.body.wikipediaLink,
    capital: req.body.capital,
  }
  let sql =
    'UPDATE city SET' +
    ' name=${name}' +
    ',wikipedia_link=${wikipediaLink}' +
    ',capital=${capital}' +
    ' WHERE id=${id}' +
    ' RETURNING' +
    ' id' +
    ',name' +
    ',capital' +
    ',wikipedia_link as"wikipediaLink"';
  db.one(sql, item)
    .then(function (data) {
      res.status(200)
        .json({
          "id": data.id,
          "name": data.name,
          "capital": data.capital,
          "wikipediaLink": data.wikipediaLink,
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function deleteItem(req, res, next, db) {
  var id = parseInt(req.params.id);
  db.result('DELETE FROM city WHERE id = $1', id)
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

module.exports = {
  getItemsCount: getItemsCount,
  getItems: getItems,
  getItem: getItem,
  createItem: createItem,
  updateItem: updateItem,
  deleteItem: deleteItem,
};
