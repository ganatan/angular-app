var fs = require('fs');
const db = require("../connection");

var ExportItems = new Promise(
  function (resolve, reject) {
    console.log('Export Cities');
    var query =
      'SELECT' +
      ' t1.id' +
      ',t1.name' +
      ',t1.capital' +
      ',t1.wikipedia_link as "wikipediaLink"' +
      ',t2.name as "countryName"' +
      ',t2.flag as "flag"' +
      ',t2.iso_alpha2 as "countryCode"' +
      ',t3.name as "continentName"' +
      ',t3.code as "continentCode"' +
      ' FROM city t1' +
      ' INNER JOIN country t2 ON t1.country_id=t2.id' +
      ' INNER JOIN continent t3 ON t2.continent_id=t3.id' +
      ' WHERE (t1.id > 111)' +
      ' ORDER BY t1.name ASC';
    db.any(query)
      .then(data => {
        var dataTmp = [];
        let population;
        let area;
        data.map((row, index, data) => {
          console.log('Export city: ' + data[index].name);
          population = parseInt(data[index].population);
          area = parseInt(data[index].area);
          dataTmp.push(
            {
              "id": data[index].id,
              "name": data[index].name,
              "wikipediaLink": data[index].wikipediaLink,
              "code": data[index].countryCode,
              "capital": data[index].capital,
              "img": './assets/params/images/flags/' + data[index].flag,
              "country": {
                "name": data[index].countryName,
                "code": data[index].countryCode,
              },
              "continent": {
                "name": data[index].continentName,
                "code": data[index].continentCode,
              },
            }
          );
        });
        var fileSrc = './data/export/cities.json';
        fs.writeFile(fileSrc, JSON.stringify(dataTmp, null, 4), (err) => {
          if (err) throw err;
          console.log('Cities file saved!');
        });
      })
      .catch(error => {
        console.log('Error on Cities :' + error);
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