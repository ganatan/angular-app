async function createItem(db, param, item, index) {
  try {
    let value = {
      name: item.name,
      wikipediaLink: item.wikipediaLink,
      frName: item.frName,
      frWikipediaLink: item.frWikipediaLink,
      releaseDate: item.releaseDate,
      image: item.image,
      tvshow: item.tvshow,
      movie: item.movie,
      franchise: item.franchise,
      clip: item.clip,
      domestic: item.domestic,
      international: item.international,
      worldwide: item.worldwide,
      budget: item.budget,
      runningTime: item.runningTime,
    };

    let sql = 'INSERT INTO movie' +
      ' (' +
      ' name' +
      ',wikipedia_link' +
      ',fr_name' +
      ',fr_wikipedia_link' +
      ',release_date' +
      ',image' +
      ',tvshow' +
      ',movie' +
      ',franchise' +
      ',clip' +
      ',domestic' +
      ',international' +
      ',worldwide' +
      ',budget' +
      ',running_time' +
      ' ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    const [rows, fields] = await db.query(sql,
      [
        value.name,
        value.wikipediaLink,
        value.frName,
        value.frWikipediaLink,
        value.releaseDate,
        value.image,
        value.tvshow,
        value.movie,
        value.franchise,
        value.clip,
        value.domestic,
        value.international,
        value.worldwide,
        value.budget,
        value.runningTime
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
