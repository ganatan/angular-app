const config = require('../../config/config.json')[process.env.NODE_ENV || 'dev'];

let formatDate = config.formatDate;

async function exportItems(db, param) {
  try {
    let sql =
      'SELECT' +
      ' t1.id' +
      ',t1.name as "name"' +
      ',t1.wikipedia_link as "wikipediaLink"' +
      ',t1.fr_name as "fr_name"' +
      ',t1.fr_wikipedia_link as "frWikipediaLink"' +
      ',DATE_FORMAT(t1.birth_date,\'' + formatDate + '\') as "birthDate"' +
      ',DATE_FORMAT(t1.death_date,\'' + formatDate + '\') as "deathDate"' +
      ',t1.image as "image"' +
      ' FROM person t1' +
      ' WHERE (t1.id >= 1000)' +
      ' ORDER BY t1.name ASC';
    const [records, fields] = await db.query(sql);
    let results = [];
    records.map((row, index, record) => {
      console.log('- Execute Export ' + (index + 1) + ' : Export -> ' + '{ ' + record[index].name + ' }');
      results.push(
        {
          "name": record[index].name,
          "wikipediaLink": record[index].wikipediaLink,
          "frName": record[index].frName,
          "frWikipediaLink": record[index].frWikipediaLink,
          "birthDate": record[index].birthDate,
          "deathDate": record[index].deathDate,
          "image": record[index].image,
        }
      );
    });
    return results;
  }
  catch (err) {
    console.log('- Execute Promise : Error on exportItems ' + ' -> ' + '{ ' + param.caption + ' } - { ' + err + ' }');
    return null;
  }
}

module.exports = {
  exportItems: exportItems,
};
