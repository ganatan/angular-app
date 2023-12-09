function getBool(param) {
  return (param === 1);
}

async function exportItems(db, param) {
  try {
    let sql =
      'SELECT' +
      ' t1.id' +
      ',t1.name' +
      ',t1.wikipedia_link as "wikipediaLink"' +
      ',t1.fr_name as "frName"' +
      ',t1.fr_Wikipedia_link as "frWikipediaLink"' +
      ',t1.capital as "capital"' +
      //      ',IF(t1.capital, \'true\', \'false\') as capital' +
      ',t2.name as "countryName"' +
      ',t2.flag as "flag"' +
      ',t2.iso_alpha2 as "countryCode"' +
      ',t3.name as "continentName"' +
      ',t3.code as "continentCode"' +
      ' FROM city t1' +
      ' INNER JOIN country t2 ON t1.country_id=t2.id' +
      ' INNER JOIN continent t3 ON t2.continent_id=t3.id' +
      ' WHERE (t1.id >= 1000)' +
      ' ORDER BY t1.name ASC';
    const [records, fields] = await db.query(sql);
    let results = [];
    records.map((row, index, record) => {
      console.log('- Execute Export ' + (index + 1) + ' : Export -> ' + '{ ' + record[index].name + ' }');
      results.push(
        {
          "name": record[index].name,
          "wikipediaLink": record[index].wikipediaLink,
          "frName": record[index].frName,
          "frWikipediaLink": record[index].frWikipediaLink,
          "capital": getBool(record[index].capital),
          "image": record[index].flag,
          "country": {
            "name": record[index].countryName,
            "code": record[index].countryCode,
          },
          "continent": {
            "name": record[index].continentName,
            "code": record[index].continentCode,
          },
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

