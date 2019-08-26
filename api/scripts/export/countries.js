var fs = require('fs');
const db = require("../connection");

var ExportItems = new Promise(
  function (resolve, reject) {
    console.log('Export Countries');
    var query =
      'SELECT' +
      ' t1.id' +
      ',t1.name' +
      ',t1.wikipedia_link as "wikipediaLink"' +
      ',t1.iso_alpha2 as "isoAlpha2"' +
      ',t1.iso_alpha3 as "isoAlpha3"' +
      ',t1.iso_numeric as "isoNumeric"' +
      ',t1.flag' +
      ',t2.name as "continentName"' +
      ',t2.code as "continentCode"' +
      ' FROM country t1' +
      ' INNER JOIN continent t2 ON t1.continent_id=t2.id' +
      ' WHERE (t1.id > 111)' +
      ' ORDER BY t1.name ASC';
    db.any(query)
      .then(data => {
        var dataTmp = [];
        let population;
        let area;
        data.map((row, index, data) => {
          console.log('Export Movie: ' + data[index].name);
          population = parseInt(data[index].population);
          area = parseInt(data[index].area);
          dataTmp.push(
            {
              "id": data[index].id,
              "name": data[index].name,
              "wikipediaLink": data[index].wikipediaLink,
              "isoAlpha2": data[index].isoAlpha2,
              "isoAlpha3": data[index].isoAlpha3,
              "isoNumeric": data[index].isoNumeric,
              "flag": data[index].flag,
              "img": './assets/params/images/flags/' + data[index].flag,
              "continent": {
                "name": data[index].continentName,
                "code": data[index].continentCode,
              },
            }
          );
        });
        var fileSrc = './data/export/countries.json';
        fs.writeFile(fileSrc, JSON.stringify(dataTmp, null, 4), (err) => {
          if (err) throw err;
          console.log('Countries file saved!');
        });
      })
      .catch(error => {
        console.log('Error on Countries :' + error);
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