async function createItem(db, item, index) {
  try {
    let values = {
      code: item.code,
      createDate: item.createDate,
    };
    console.log('Create views ' + item.code);
    let sql = 'INSERT INTO views' +
      ' (' +
      ' code' +
      ',create_date' +
      ' ) VALUES' +
      ' (' +
      ' ${code}' +
      ',${createDate}' +
      ' )';
    const result = await db.none(sql, values)
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



