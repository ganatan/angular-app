async function createItem(db, param, item, index) {
  try {
    let create;
    let key = item.continent.code;
    let continentId = 0;

    const data = await db.any("SELECT id FROM continent WHERE code = $1", key);
    if (data.length === 1) { continentId = data[0].id; }
    
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
        ' ) VALUES' +
        ' (' +
        ' ${name}' +
        ',${wikipediaLink}' +
        ',${frName}' +
        ',${frWikipediaLink}' +
        ',${isoNumeric}' +
        ',${isoAlpha2}' +
        ',${isoAlpha3}' +
        ',${flag}' +
        ',${continentId}' +
        ' )';
      await db.none(sql, value);
      create = true;
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