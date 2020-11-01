async function exportItems(db, param) {
  try {
    let sql =
      'SELECT' +
      ' t1.id' +
      ',t1.code' +
      ',t1.name' +
      ',t1.wikipedia_link as "wikipediaLink"' +
      ',t1.fr_name as "frName"' +
      ',t1.fr_wikipedia_link as "frWikipediaLink"' +
      ',t1.area' +
      ',t1.population' +
      ',t1.countries_number as "countriesNumber"' +
      ' FROM continent t1' +
      ' WHERE (t1.id >= 1000)' +
      ' ORDER BY t1.name ASC';
    const records = await db.any(sql);
    let results = [];
    let population;
    let area;
    records.map((row, index, record) => {
      console.log('- Execute Export ' + (index + 1) + ' : Export -> ' + '{ ' + record[index].name + ' }');
      population = parseInt(record[index].population);
      area = parseInt(record[index].area);
      results.push(
        {
          "code": record[index].code,
          "name": record[index].name,
          "wikipediaLink": record[index].wikipediaLink,
          "frName": record[index].frName,
          "frWikipediaLink": record[index].frWikipediaLink,
          "area": area,
          "population": population,
          "countriesNumber": record[index].countriesNumber,
        }
      );
    });
    return results;
  }
  catch (err) {
    console.log('- Execute Promise : Error on exportItems ' + ' -> ' + '{ ' + param.caption + ' } - { ' + err + ' }');
    return null;
  }
}

module.exports = {
  exportItems: exportItems,
};

