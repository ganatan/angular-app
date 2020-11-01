const config = require('../../config/config.json')[process.env.NODE_ENV || 'dev'];

const formatDate = config.formatDate;

async function exportItems(db, param) {
  try {
    let sql =
      'SELECT' +
      ' t1.id' +
      ',t1.name as "name"' +
      ',to_char(t1.release_date, \'' + formatDate + '\') as "releaseDate"' +
      ',t1.wikipedia_link as "wikipediaLink"' +
      ',t1.fr_name as "frName"' +
      ',t1.fr_wikipedia_link as "frWikipediaLink"' +
      ',t1.image as "image"' +
      ',t1.tvshow as "tvshow"' +
      ',t1.movie as "movie"' +
      ',t1.franchise as "franchise"' +
      ',t1.clip as "clip"' +
      ',t1.domestic as "domestic"' +
      ',t1.international as "international"' +
      ',t1.worldwide as "worldwide"' +
      ',t1.budget as "budget"' +
      ',t1.running_time as "runningTime"' +
      ' FROM movie t1' +
      ' WHERE (t1.id >= 1000)' +
      ' ORDER BY t1.name ASC';
    const records = await db.any(sql);
    let results = [];
    records.map((row, index, record) => {
      console.log('- Execute Export ' + (index + 1) + ' : Export -> ' + '{ ' + record[index].name + ' }');
      results.push(
        {
          "code": record[index].code,
          "name": record[index].name,
          "releaseDate": record[index].releaseDate,
          "wikipediaLink": record[index].wikipediaLink,
          "frName": record[index].frName,
          "frWikipediaLink": record[index].frWikipediaLink,
          "image": record[index].image,
          "tvshow": record[index].tvshow,
          "movie": record[index].movie,
          "franchise": record[index].franchise,
          "clip": record[index].clip,
          "domestic": record[index].domestic,
          "international": record[index].international,
          "worldwide": record[index].worldwide,
          "budget": record[index].budget,
          "runningTime": record[index].runningTime,
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
