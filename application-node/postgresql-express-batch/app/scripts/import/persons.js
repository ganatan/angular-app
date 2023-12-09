async function createItem(db, param, item, index) {
  try {
    let deathCityWikipediaLink = '';
    let birthCityWikipediaLink = '';
    if (item.birthCity != undefined) { birthCityWikipediaLink = item.birthCity.wikipediaLink }
    if (item.deathCity != undefined) { deathCityWikipediaLink = item.deathCity.wikipediaLink }

    let genderId = 0;
    let birthCityId = 0;
    let deathCityId = 0;

    data = await db.any("SELECT id FROM gender WHERE name = $1", item.gender);
    if (data.length === 1) { genderId = data[0].id; }
    data = await db.any("SELECT id FROM city WHERE wikipedia_link = $1", birthCityWikipediaLink);
    if (data.length === 1) { birthCityId = data[0].id; }
    data = await db.any("SELECT id FROM city WHERE wikipedia_link = $1", deathCityWikipediaLink);
    if (data.length === 1) { deathCityId = data[0].id; }

    if ((genderId != 0) && (birthCityId != 0)) {
      let value = {
        name: item.name,
        wikipediaLink: item.wikipediaLink,
        birthDate: item.birthDate,
        deathDate: item.deathDate,
        image: item.image,
        genderId: genderId,
        birthCityId: birthCityId,
        deathCityId: deathCityId,
      };
      let sql = 'INSERT INTO person' +
        ' (' +
        ' name' +
        ',wikipedia_link' +
        ',birth_date' +
        ',death_date' +
        ',image' +
        ',birth_city_id' +
        ',death_city_id' +
        ',gender_id' +
        ' ) VALUES' +
        ' (' +
        ' ${name}' +
        ',${wikipediaLink}' +
        ',${birthDate}' +
        ',${deathDate}' +
        ',${image}' +
        ',${birthCityId}' +
        ',${deathCityId}' +
        ',${genderId}' +
        ' )';
      await db.none(sql, value);
      create = true;
    } else {
      if (genderId === 0) {
        console.log('- Execute Promise ' + index + ' : Insert -> ' + '{ ' + item[param.name] + ' } -> Failed : Gender missing -> { ' + item.gender + ' } ');
      }
      if (birthCityId === 0) {
        console.log('- Execute Promise ' + index + ' : Insert -> ' + '{ ' + item[param.name] + ' } -> Failed : City missing -> { ' + item.birthCity.name + ' } ');
      }
      create = false;
    }
    return create;
  }
  catch (err) {
    console.log('- Error on Execute createItem ' + ' -> ' + '{ ' + item[param.name] + ' } : ' + err);
    return false;
  }
};

module.exports = {
  createItem: createItem,
};
