async function createItem(db, param, item, index) {
  try {
    let value = {
      name: item.name,
      wikipediaLink: item.wikipediaLink,
    };
    let sql =
      'INSERT INTO company' +
      ' (' +
      ' name' +
      ',wikipedia_link' +
      ' ) VALUES' +
      ' (' +
      ' ${name}' +
      ',${wikipediaLink}' +
      ' )';
    await db.none(sql, value)
    return true;
  }
  catch (err) {
    console.log('- Error on Execute createItem ' + ' -> ' + '{ ' + item[param.name] + ' } : ' + err);
    return false;
  }
};

module.exports = {
  createItem: createItem,
};