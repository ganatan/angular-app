var fs = require('fs');
const db = require("../connection");

var ExportItems = new Promise(
  function (resolve, reject) {
    console.log('Export Continents');
    var query = 'SELECT ' +
      'id' +
      ',name' +
      ',code' +
      ',french_name as "frenchName"' +
      ',wikipedia_link as "wikipediaLink"' +
      ',area as "area"' +
      ',population as "population"' +
      ',countries_number as "countriesNumber"' +
      ' FROM continent WHERE id>=1000 ORDER BY name ASC';
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
              "code": data[index].code,
              "frenchName": data[index].frenchName,
              "wikipediaLink": data[index].wikipediaLink,
              "area": area,
              "population": population,
              "countriesNumber": data[index].countriesNumber,
            }
          );
        });
        var fileSrc = './data/export/continents.json';
        fs.writeFile(fileSrc, JSON.stringify(dataTmp, null, 4), (err) => {
          if (err) throw err;
          console.log('Continents file saved!');
        });
      })
      .catch(error => {
        console.log('Error on Continents :' + error);
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