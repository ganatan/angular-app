async function createItem(db, param, item, index) {
  try {
    let value = {
      name: item.name,
    };
    let sql =
      'INSERT INTO gender' +
      ' (' +
      ' name' +
      ' ) VALUES' +
      ' (' +
      ' ${name}' +
      ' )';
    await db.none(sql, value)
    return true;
  }
  catch (err) {
    console.log('- Error on Execute createItem ' + ' -> ' + '{ ' + item[param.name] + ' } : ' + err);
    return false;
  }
}

module.exports = {
  createItem: createItem,
};
