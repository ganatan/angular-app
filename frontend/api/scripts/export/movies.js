var fs = require('fs');
const db = require("../connection");

var ExportItems = new Promise(
  function (resolve, reject) {
    console.log('Export Movies');
    var query = 'SELECT ' +
      'id' +
      ',name' +
      ',to_char(release_date, \'DD/MM/YYYY\') as "releaseDate"' +
      ',wikipedia_link as "wikipediaLink"' +
      ',file_name as "fileName"' +
      ',show' +
      ',movie' +
      ' FROM movie WHERE (id>=1000) ORDER BY name ASC';
    db.any(query)
      .then(data => {
        var dataTmp = [];
        data.map((row, index, data) => {
          console.log('Export Movie: ' + data[index].name);
          dataTmp.push(
            {
              "id": data[index].id,
              "name": data[index].name,
              "releaseDate": data[index].releaseDate,
              "wikipediaLink": data[index].wikipediaLink,
              "fileName": data[index].fileName,
              "img": "./assets/params/images/movies/" + data[index].fileName,
              "show": data[index].show,
              "movie": data[index].movie,
            }
          );
        });
        var fileSrc = './data/export/movies.json';
        fs.writeFile(fileSrc, JSON.stringify(dataTmp, null, 4), (err) => {
          if (err) throw err;
          console.log('Movies file saved!');
        });
      })
      .catch(error => {
        console.log('Error on Movies :' + error);
        reject('error');
      });
  }
);

Promise.all([
  ExportItems,
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