async function createItem(db, item, index) {
  try {
    console.log('0001:' + JSON.stringify(item))
    let values = {
      youtubeLink: item.youtubeLink,
      releaseDate: item.releaseDate,
      createDate: item.createDate,
      category: item.category,
      name: item.name,
    };
    console.log('0002:' + JSON.stringify(values))
    let sql = 'INSERT INTO trailer' +
      ' (' +
      ' name' +
      ',create_date' +
      ' ) VALUES' +
      ' (' +
      ' ${name}' +
      ',${createDate}' +
      ' )';
    await db.none(sql, values)
    return true;
  }
  catch (err) {
    console.log('- Error on Execute createItem ' + ' -> ' + item.name + ' : ' + err);
    return false;
  }
};

module.exports = {
  createItem: createItem,
};



