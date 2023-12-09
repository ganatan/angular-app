async function exportItems(db, param) {
  try {
    let sql =
      'SELECT' +
      ' t1.id' +
      ',t1.name' +
      ',t1.wikipedia_link as "wikipediaLink"' +
      ',t1.fr_name as "frName"' +
      ',t1.fr_wikipedia_link as "frWikipediaLink"' +
      ' FROM profession t1' +
      ' WHERE (t1.id >= 1000)' +
      ' ORDER BY t1.name ASC';
    const records = await db.any(sql);
    let results = [];
    records.map((row, index, record) => {
      console.log('- Execute Export ' + (index + 1) + ' : Export -> ' + '{ ' + record[index].name + ' }');
      results.push(
        {
          "code": record[index].code,
          "name": record[index].name,
          "wikipediaLink": record[index].wikipediaLink,
          "frName": record[index].frName,
          "frWikipediaLink": record[index].frWikipediaLink,
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

