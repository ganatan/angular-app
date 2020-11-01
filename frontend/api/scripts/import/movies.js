var config = require('../../config.json')[process.env.NODE_ENV || 'dev'];
var dataDirectory = config.dataDirectory;

const db = require("../connection");
var fs = require('fs');

var createMovies = new Promise(
  function (resolve, reject) {
    console.log('Import Movies');
    var fileName = './data/import/movies.json';
    fs.readFile(fileName, 'utf8', function (err, data) {
      if (err) reject(err);
      var promises = [];
      var items = JSON.parse(data);
      for (var i = 0, len = items.length; i < len; ++i) {
        var item = items[i];
        promises.push(createMovie(item));
      }
      Promise.all(promises).then((res) => {
        resolve(res);
      }).catch((err) => {
        console.log('Error on Movies :');
        reject(err);
      });
    });
  }
);

function createMovie(item) {
  return new Promise(function (resolve, reject) {
    var values = [
      item.name,
      item.releaseDate,
      item.wikipediaLink,
      item.fileName,
      item.show,
      item.movie,
    ];
    console.log('Create movie ' + item.name);
    var sql = 'INSERT INTO movie' +
      ' (' +
      'name' +
      ',release_date' +
      ',wikipedia_link' +
      ',file_name' +
      ',show' +
      ',movie' +
      ')' +
      ' values(' +
      '$1,$2,$3,$4,$5,$6' +
      ')';
    db.any(sql, values)
      .then((res) => {
        resolve('Movie ' + item.name + ' Created');
      }).catch((err) => {
        console.log('Error on Movie :' + item.name);
        reject(err);
      });
  });
}

Promise.all([
  createMovies,
]).then((res) => {
  console.log('Data updated!');
  Promise.all([
  ]).then((res) => {
    process.exit();
  });
}).catch((err) => {
  console.log(err);
  process.exit();
});