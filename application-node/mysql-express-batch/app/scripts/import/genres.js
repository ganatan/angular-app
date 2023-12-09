async function createItem(db, param, item, index) {
  try {
    let value = {
      name: item.name,
      wikipediaLink: item.wikipediaLink,
      frName: item.frName,
      frWikipediaLink: item.frWikipediaLink,
    };
    let sql =
      'INSERT INTO genre' +
      ' (' +
      ' name' +
      ',wikipedia_link' +
      ',fr_name' +
      ',fr_wikipedia_link' +
      ' ) VALUES (?,?,?,?)';
    const [rows, fields] = await db.query(sql,
      [
        value.name,
        value.wikipediaLink,
        value.frName,
        value.frWikipediaLink
      ]
    );
    return true;    
  }
  catch (err) {
    console.log('- Execute Promise ' + index + ' : Error on createItem ' + ' -> ' + '{ ' + item[param.name] + ' } - { ' + err + ' }');
    return false;
  }
};

module.exports = {
  createItem: createItem,
};