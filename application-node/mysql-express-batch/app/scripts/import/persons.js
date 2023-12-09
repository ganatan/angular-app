async function createItem(db, param, item, index) {
  try {
    let deathCityWikipediaLink = '';
    let birthCityWikipediaLink = '';
    if (item.birthCity != undefined) { birthCityWikipediaLink = item.birthCity.wikipediaLink }
    if (item.deathCity != undefined) { deathCityWikipediaLink = item.deathCity.wikipediaLink }

    let genderId = 0;
    let birthCityId = 0;
    let deathCityId = 0;

    let sql = 'SELECT id FROM gender WHERE name = ?';
    let [rows, fields] = await db.query(sql, item.gender);
    if (rows[0] != undefined) { genderId = rows[0].id; }

    if (birthCityWikipediaLink != null) {
      sql = 'SELECT id FROM city WHERE wikipedia_link = ?';
      [rows, fields] = await db.query(sql, birthCityWikipediaLink);
      if (rows[0] != undefined) { birthCityId = rows[0].id; }
    }

    if (deathCityWikipediaLink != null) {
      sql = 'SELECT id FROM city WHERE wikipedia_link = ?';
      [rows, fields] = await db.query(sql, deathCityWikipediaLink);
      if (rows[0] != undefined) { deathCityId = rows[0].id; }
    }

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

        ' ) VALUES (?,?,?,?,?,?,?,?)';
      const [rows, fields] = await db.query(sql,
        [
          value.name,
          value.wikipediaLink,
          value.birthDate,
          value.deathDate,
          value.image,
          value.genderId,
          value.birthCityId,
          value.deathCityId,
        ]
      );
      create = true;
    } else {
      if (genderId === 0) {
        console.log('- Execute Promise ' + index + ' : failed -> ' + '{ ' + item[param.name] + ' } - { Gender missing - ' + item.gender + ' } ');

      }
      if (birthCityId === 0) {
        console.log('- Execute Promise ' + index + ' : Insert -> ' + '{ ' + item[param.name] + ' } -> Failed : Country missing -> { ' + birthCityWikipediaLink + ' } ');
      }
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
