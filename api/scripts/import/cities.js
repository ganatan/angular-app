const db = require("../connection");
var fs = require('fs');

var createItems = new Promise(
  function (resolve, reject) {
    console.log('Cities Import');
    var fileName = './data/import/cities.json';
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
        console.log('Error on Cities creation :' + err);
        reject(err);
      });
    });
  }
);

function createItem(item) {
  return new Promise(function (resolve, reject) {
    db
      .one("SELECT id FROM country WHERE iso_alpha2 = $1", item.code)
      .then(data => {
        let id = data.id;
        var values = [
          item.name,
          item.wikipediaLink,
          item.capital,
          id,
        ];
        var sql = 'INSERT INTO city' +
          ' (' +
          'name' +
          ',wikipedia_link' +
          ',capital' +
          ',country_id' +
          ')' +
          ' values(' +
          '$1,$2,$3,$4' +
          ')';
        db.none(sql, values)
          .then(data2 => {
            console.log('City created : ' + item.name);
            resolve('City ' + item.name + ' Created');
          })
          .catch(error => {
            console.log('Error on City :' + item.name + ': ' + error);
            reject(error);
          });
      })
      .catch((err) => {
        console.log('Error on Cities.js:' + err);
      });
  });
}

createItems
  .then((res) => {
    console.log('All Cities imported');
    process.exit();
  }).catch((err) => {
    process.exit();
  });