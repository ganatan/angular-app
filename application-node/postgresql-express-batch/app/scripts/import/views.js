async function createItem(db, item, index) {
  try {
    let values = {
      code: item.code,
      createDate: item.createDate,
    };
    let sql = 'INSERT INTO views' +
      ' (' +
      ' code' +
      ',create_date' +
      ' ) VALUES' +
      ' (' +
      ' ${code}' +
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



