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
    ' FROM city' +
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
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.name' +
    ',t1.wikipedia_link as "wikipediaLink"' +
    ',t1.fr_name as "frName"' +
    ',t1.fr_wikipedia_link as "frWikipediaLink"' +
    ',t1.capital' +
    ',t2.name as "countryName"' +
    ',t2.iso_alpha2 as "countryCode"' +
    ',t2.flag as "countryFlag"' +
    ',t3.name as "continentName"' +
    ',t3.code as "continentCode"' +
    ' FROM city t1' +
    ' INNER JOIN country t2 ON t1.country_id=t2.id' +
    ' INNER JOIN continent t3 ON t2.continent_id=t3.id' +
    ' WHERE (t1.id >= ' + firstKey + ')' +
    ' ORDER BY t1.name ASC';
  db.any(sql)
    .then(records => {
      let results = [];
      records.map((row, index, record) => {
        const image = url + '/countries/flags/' + record[index].countryFlag;
        results.push(
          {
            "id": record[index].id,
            "name": record[index].name,
            "wikipediaLink": record[index].wikipediaLink,
            "frName": record[index].frName,
            "frWikipediaLink": record[index].frWikipediaLink,
            "capital": record[index].capital,
            "country": {
              "name": record[index].countryName,
              "code": record[index].countryCode,
              "image": image,
            },
            "continent": {
              "name": record[index].continentName,
              "code": record[index].continentCode,
            },
            "links":
              [{
                "rel": "self",
                "href": url + '/cities/' + record[index].id
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
    ',t1.wikipedia_link as "wikipediaLink"' +
    ',t1.fr_name as "frName"' +
    ',t1.fr_wikipedia_link as "frWikipediaLink"' +
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
    .then(function (record) {
      const image = url + '/countries/flags/' + record.flag;
      const area = parseInt(record.continentArea);
      const population = parseInt(record.continentPopulation);
      res.status(200)
        .json({
          "id": record.id,
          "name": record.name,
          "wikipediaLink": record.wikipediaLink,
          "frName": record.frName,
          "frWikipediaLink": record.frWikipediaLink,
          "capital": record.capital,
          "country": {
            "name": record.countryName,
            "code": record.countryCode,
            "isoAlpha2": record.countryIsoAlpha2,
            "isoAlpha3": record.countryIsoAlpha3,
            "isoNumeric": record.countryIsoNumeric,
            "image": image,
          },
          "continent": {
            "name": record.continentName,
            "code": record.continentCode,
            "area": area,
            "population": population,
            "countriesNumber": record.continentCountriesNumber,
          },
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

function createItem(req, res, next) {
  const item = {
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
    ',wikipedia_link as "wikipediaLink"';
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

function updateItem(req, res, next) {
  const item = {
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
    ',wikipedia_link as "wikipediaLink"';
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

function deleteItem(req, res, next) {
  const id = parseInt(req.params.id);
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
