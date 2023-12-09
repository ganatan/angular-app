async function createItem(db, param, item, index) {
  try {
    let value = {
      code: item.code,
      name: item.name,
      wikipediaLink: item.wikipediaLink,
      frName: item.frName,
      frWikipediaLink: item.frWikipediaLink,
      area: item.area,
      population: item.population,
      countriesNumber: item.countriesNumber,
    };
    let sql =
      'INSERT INTO continent' +
      ' (' +
      ' code' +
      ',name' +
      ',wikipedia_link' +
      ',fr_name' +
      ',fr_wikipedia_link' +
      ',area' +
      ',population' +
      ',countries_number' +
      ' ) VALUES (?,?,?,?,?,?,?,?)';
    const [rows, fields] = await db.query(sql,
      [
        value.code,
        value.name,
        value.wikipediaLink,
        value.frName,
        value.frWikipediaLink,
        value.area,
        value.population,
        value.countriesNumber
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
