async function exportItems(db, param) {
  try {
    let sql =
      'SELECT' +
      ' t1.id' +
      ',t1.name' +
      ',t1.wikipedia_link as "wikipediaLink"' +
      ' FROM company t1' +
      ' WHERE (t1.id >= 1000)' +
      ' ORDER BY t1.name ASC';
    const records = await db.any(sql);
    let results = [];
    records.map((row, index, record) => {
      console.log('- Execute Export ' + (index + 1) + ' : Export -> ' + '{ ' + record[index].name + ' }');
      results.push(
        {
          "name": record[index].name,
          "wikipediaLink": record[index].wikipediaLink,
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
