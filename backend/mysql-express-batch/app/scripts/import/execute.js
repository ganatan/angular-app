const fs = require('fs');

const config = require('../../config/config.json')[process.env.NODE_ENV || 'dev'];
const database = require('../../db/connection');
const routing = require('./routing');

let dataConfig = config.dataConfig;
let dataImport = config.dataImport;

async function createItem(db, param, item, index) {
  try {
    return create = await routing.createItem(db, param, item, index);
  }
  catch (err) {
    console.log('- Error on Execute routing.createItem ' + ' -> ' + item[param.name] + ' : ' + err);
    return false;
  }
}

async function findItem(db, param, item) {
  try {
    let sql = 'SELECT count(id) as count FROM ' + param.table + ' WHERE ' + param.key + '= ?';
    const [rows, fields] = await db.query(sql, item[param.data]);
    return (rows[0].count != 0);
  }
  catch (err) {
    console.log('- Error on Execute findItem ' + ' -> ' + item[param.name] + ' : ' + err);
    return true;
  }
};

async function importOneItem(db, param, item, index) {
  try {
    let exist = await findItem(db, param, item)
    if (exist) {
      console.log('- Execute Promise ' + index + ' : failed -> { ' + item[param.name] + ' } - { Record already exists }');
    } else {
      let create = await createItem(db, param, item, index)
      if (create) {
        console.log('- Execute Promise ' + index + ' : Insert -> ' + '{ ' + item[param.name] + ' }');
      }
    } return true;
  }
  catch (err) {
    console.log('- Error on Execute importItem ' + ' -> ' + item[param.name] + ' : ' + err);
    return false;
  }
}

async function importItems(db, param) {
  return new Promise(function (resolve, reject) {
    let file = dataImport + param.file;
    console.log('- Reading JSON Data File -> ' + '{ ' + file + ' }');
    console.log('- Import started -> { ' + param.caption + ' }');
    fs.readFile(file, 'utf8', function (err, records) {
      if (err) {
        console.log('- Error on Execute importItems -> ');
        console.log('- Error Message { ' + err + ' }');
        reject(true);
      } else {
        let promises = [];
        let items = JSON.parse(records);
        let item;
        for (let i = 1, len = items.length; i <= len; ++i) {
          item = items[i - 1];
          console.log('- Add Promise ' + i + ' : Insert => ' + ' { ' + item[param.name] + ' }');
          promises.push(importOneItem(db, param, item, i));
        }
        Promise.all(promises).then((res) => {
          resolve(true);
        }).catch((err) => {
          reject(false);
        });
      }
    });
  })
};

async function executeImport(db) {
  return new Promise(function (resolve, reject) {
    let args = process.argv.slice(2);
    let arg = args[0];
    let endpoint = arg.substring(11, arg.length);
    let file = dataConfig + endpoint + '.json';
    console.log('- Reading JSON Config File -> ' + '{ ' + file + ' }');
    fs.readFile(file, 'utf8', function (err, record) {
      if (err) {
        console.log('- Error on executeImport -> ');
        console.log('- Error Message { ' + err + ' }');
        return false;
      } else {
        let param = JSON.parse(record);
        importItems(db, param)
          .then((res) => {
            console.log('- Import finished -> { ' + param.caption + ' }');
            resolve(true);
          }).catch((err) => {
            console.log('- Import failed -> { ' + param.caption + ' }');
            reject(false);
          });
      }
    });
  })
};

async function execute() {
  try {
    db = await database.connection(false);
    if (db != null) {
      await executeImport(db)
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

execute()
  .then(res => {
    if (res) {
      console.log('- Tables creation -> started');
    } else {
      console.log('- Database Creation failed - >');
    }
    process.exit();
  })
  .catch(err => {
    console.log('- Create Database : failed -> { ' + err + ' }');
    process.exit();
  });

