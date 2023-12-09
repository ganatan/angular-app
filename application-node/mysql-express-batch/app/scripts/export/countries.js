async function exportItems(db, param) {
  try {
    let sql =
    'SELECT' +
    ' t1.id' +
      ',t1.name' +
      ',t1.wikipedia_link as "wikipediaLink"' +
      ',t1.fr_name as "frName"' +
      ',t1.fr_Wikipedia_link as "frWikipediaLink"' +
      ',t1.iso_alpha2 as "isoAlpha2"' +
      ',t1.iso_alpha3 as "isoAlpha3"' +
      ',t1.iso_numeric as "isoNumeric"' +
      ',t1.flag' +
      ',t2.name as "continentName"' +
      ',t2.code as "continentCode"' +
      ' FROM country t1' +
      ' INNER JOIN continent t2 ON t1.continent_id=t2.id' +
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
          "isoAlpha2": record[index].isoAlpha2,
          "isoAlpha3": record[index].isoAlpha3,
          "isoNumeric": record[index].isoNumeric,
          "continent": {
            "name": record[index].continentName,
            "code": record[index].continentCode,
          },
          "flag": record[index].flag,
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

