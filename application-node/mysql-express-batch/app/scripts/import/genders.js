async function createItem(db, param, item, index) {
  try {
    let value = {
      name: item.name,
    };
    let sql =
      'INSERT INTO gender' +
      ' (' +
      ' name' +
      ' ) VALUES (?)';
    const [rows, fields] = await db.query(sql,
      [
        value.name
      ]
    );
    return true;
  }
  catch (err) {
    console.log('- Execute Promise ' + index + ' : Error on createItem ' + ' -> ' + '{ ' + item[param.name] + ' } - { ' + err + ' }');
    return false;
  }
}

module.exports = {
  createItem: createItem,
};
