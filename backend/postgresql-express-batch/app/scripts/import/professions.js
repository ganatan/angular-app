async function createItem(db, param, item, index) {
  try {
    let value = {
      name: item.name,
      wikipediaLink: item.wikipediaLink,
      frName: item.frName,
      frWikipediaLink: item.frWikipediaLink,
    };
    let sql =
      'INSERT INTO profession' +
      ' (' +
      ' name' +
      ',wikipedia_link' +
      ',fr_name' +
      ',fr_wikipedia_link' +
      ' ) VALUES' +
      ' (' +
      ' ${name}' +
      ',${wikipediaLink}' +
      ',${frName}' +
      ',${frWikipediaLink}' +
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