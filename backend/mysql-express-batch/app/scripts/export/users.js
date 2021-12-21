async function exportItems(db, param) {
  try {
    let sql =
      'SELECT' +
      ' t1.id' +
      ',t1.name' +
      ',t1.password as "password"' +
      ' FROM users t1' +
      ' WHERE (t1.id >= 1000)' +
      ' ORDER BY t1.name ASC';
    const [records, fields] = await db.query(sql);
    let results = [];
    records.map((row, index, record) => {
      console.log('- Execute Export ' + (index + 1) + ' : Export -> ' + '{ ' + record[index].name + ' }');
      results.push(
        {
          "code": record[index].code,
          "name": record[index].name,
          "password": record[index].password,
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