const fs = require('fs');

const config = require('../../config/config.json')[process.env.NODE_ENV || 'dev'];
const database = require('../../db/connection');

const dataModels = config.dataModels;

async function createOneTable(table) {
  try {
    let items = '';
    if (table.pk) { items = 'id MEDIUMINT NOT NULL AUTO_INCREMENT'; }
    for (let i = 0, len = table.fields.length; i < len; ++i) {
      let field = table.fields[i];
      if (items != '') { items = items + ','; }
      items = items + field.name.toLowerCase() + ' ' + field.domain.toLowerCase();
    }
    if (table.pk) {
      items = items + ',PRIMARY KEY (id)';
    }
    let sql = 'CREATE TABLE ' + table.name.toLowerCase() + ' (' + items + ')';
    await db.query(sql);
    if (table.pk) {
      sql = 'ALTER TABLE ' + table.name.toLowerCase() + '  AUTO_INCREMENT = 1000;'
      await db.query(sql);
    }
    console.log('- Table Created -> { ' + table.name.toLowerCase() + ' }');
    return true;
  }
  catch (err) {
    console.log('- Table Creation : Failed -> { ' + table.name.toLowerCase() + ' } - { ' + err + ' }');
    return false;
  }
}

function createTables(fileName) {
  return new Promise(
    function (resolve, reject) {
      let file = dataModels + fileName;
      console.log('- Reading JSON Models File -> ' + '{ ' + file + ' }');
      console.log('- Tables creation -> started');
      fs.readFile(file, 'utf8', function (err, data) {
        if (err) reject(err);
        let promises = [];
        let tables = JSON.parse(data);
        for (let i = 0, len = tables.length; i < len; ++i) {
          let table = tables[i];
          promises.push(createOneTable(table));
        }
        Promise.all(promises)
          .then((res) => {
            resolve(true);
          })
          .catch((err) => {
            reject(false);
          });
      });
    })
};

async function executeCreate(fileName) {
  try {
    db = await database.connection(false);
    if (db != null) {
      await createTables(fileName)
      return true;
    } else {
      return false;
    }
  }
  catch (err) {
    console.log('- Database Creation started {' + err + ' }');
    return false;
  }
}

module.exports = {
  executeCreate: executeCreate,
};
