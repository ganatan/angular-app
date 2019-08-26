const db = require("../connection");
var fs = require('fs');

var createItems = new Promise(
  function (resolve, reject) {
    console.log('Continents Import');
    var fileName = './data/import/continents.json';
    fs.readFile(fileName, 'utf8', function (err, data) {
      if (err) reject(err);
      var promises = [];
      var items = JSON.parse(data);
      for (var i = 0, len = items.length; i < len; ++i) {
        var item = items[i];
        promises.push(createItem(item));
      }
      Promise.all(promises).then((res) => {
        resolve(res);
      }).catch((err) => {
        console.log('Error on Continents creation :' + err);
        reject(err);
      });
    });
  }
);

function createItem(item) {
  return new Promise(function (resolve, reject) {
    var value = [
      item.code,
      item.name,
      item.frenchName,
      item.wikipediaLink,
      item.area,
      item.population,
      item.countriesNumber,
    ];
    var sql = 'INSERT INTO continent' +
      ' (' +
      ' code' +
      ',name' +
      ',french_name' +
      ',wikipedia_link' +
      ',area' +
      ',population' +
      ',countries_number' +
      ' ) VALUES' +
      ' (' +
      '$1,$2,$3,$4,$5,$6,$7' +
      ')';
    db.none(sql, value)
      .then((res) => {
        console.log('Continent created : ' + item.name);
        resolve('Continent created : ' + item.name);
      }).catch((err) => {
        console.log('Error on Continent : ' + item.name + ' : ' + err);
        reject(err);
      });
  });
}

createItems
  .then((res) => {
    console.log('All Continents imported');
    process.exit();
  }).catch((err) => {
    process.exit();
  });