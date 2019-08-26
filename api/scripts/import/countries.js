const db = require("../connection");
var fs = require('fs');

var createItems = new Promise(
  function (resolve, reject) {
    console.log('Countries Import');
    var fileName = './data/import/countries.json';
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
        console.log('Error on Countries creation :' + err);
        reject(err);
      });
    });
  }
);

function createItem(item) {
  return new Promise(function (resolve, reject) {
    db
      .one("SELECT id FROM continent WHERE code = $1", item.continent.code)
      .then(data => {
        let id = data.id;
        var values = [
          item.name,
          item.wikipediaLink,
          item.isoAlpha2,
          item.isoAlpha3,
          item.isoNumeric,
          item.flag,
          id,
        ];
        var sql =
          'INSERT INTO country' +
          ' (' +
          'name' +
          ',wikipedia_link' +
          ',iso_alpha2' +
          ',iso_alpha3' +
          ',iso_numeric' +
          ',flag' +
          ',continent_id' +
          ')' +
          ' values(' +
          '$1,$2,$3,$4,$5,$6,$7' +
          ')';
        db.none(sql, values)
          .then(data2 => {
            console.log('Country created : ' + item.name);
            resolve('Country ' + item.name + ' Created');
          })
          .catch(error => {
            console.log('Error on Country :' + item.name + ': ' + error);
            reject(error);
          });
      })
      .catch((err) => {
        console.log('Error on countries.js:' + err);
      });
  });
}

createItems
  .then((res) => {
    console.log('All Countries imported');
    process.exit();
  }).catch((err) => {
    process.exit();
  });