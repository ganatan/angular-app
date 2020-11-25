async function createItem(db, param, item, index) {
  try {
    let create;
    let key = item.continent.code;
    let continentId = 0;

    let sql = 'SELECT id FROM continent WHERE code = ?';
    const [rows, fields] = await db.query(sql, key);
    if (rows[0] != undefined) { continentId = rows[0].id; }

    if (continentId != 0) {
      let value = {
        name: item.name,
        wikipediaLink: item.wikipediaLink,
        frName: item.frName,
        frWikipediaLink: item.frWikipediaLink,
        isoNumeric: item.isoNumeric,
        isoAlpha2: item.isoAlpha2,
        isoAlpha3: item.isoAlpha3,
        flag: item.flag,
        continentId: continentId,
      };
      let sql =
        'INSERT INTO country' +
        ' (' +
        ' name' +
        ',wikipedia_link' +
        ',fr_name' +
        ',fr_wikipedia_link' +
        ',iso_numeric' +
        ',iso_alpha2' +
        ',iso_alpha3' +
        ',flag' +
        ',continent_id' +
        ' ) VALUES (?,?,?,?,?,?,?,?,?)';
      const [rows, fields] = await db.query(sql,
        [
          value.name,
          value.wikipediaLink,
          value.frName,
          value.frWikipediaLink,
          value.isoNumeric,
          value.isoAlpha2,
          value.isoAlpha3,
          value.flag,
          value.continentId,
        ]
      );
      return true;
    } else {
      console.log('- Execute Promise ' + index + ' : failed -> ' + '{ ' + item[param.name] + ' } - { Continent missing - ' + key + ' } ');
      create = false;
    }
    return create;
  }
  catch (err) {
    console.log('- Execute Promise ' + index + ' : Error on createItem ' + ' -> ' + '{ ' + item[param.name] + ' } - { ' + err + ' }');
    return false;
  }
};

module.exports = {
  createItem: createItem,
};