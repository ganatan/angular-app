async function createItem(db, param, item, index) {
  try {
    let create;
    let countryId = 0;
    let key = item.country.code;

    const data = await db.any("SELECT id FROM country WHERE iso_alpha2 = $1", key);
    if (data.length === 1) { countryId = data[0].id; }

    if (countryId != 0) {
      let value = {
        name: item.name,
        wikipediaLink: item.wikipediaLink,
        frName: item.frName,
        frWikipediaLink: item.frWikipediaLink,
        capital: item.capital,
        countryId: countryId,
      };
      let sql =
        'INSERT INTO city' +
        ' (' +
        ' name' +
        ',wikipedia_link' +
        ',fr_name' +
        ',fr_wikipedia_link' +
        ',capital' +
        ',country_id' +
        ' ) VALUES' +
        ' (' +
        ' ${name}' +
        ',${wikipediaLink}' +
        ',${frName}' +
        ',${frWikipediaLink}' +
        ',${capital}' +
        ',${countryId}' +
        ' )';
      await db.none(sql, value);
      create = true;
    } else {
      console.log('- Execute Promise ' + index + ' : failed -> ' + '{ ' + item[param.name] + ' } - { Country missing - ' + key + ' } ');
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
