const fs = require('fs');

const config = require('../../config/config.json')[process.env.NODE_ENV || 'dev'];
const db = require("../../db/connection");

const dataModels = config.dataModels;

function createOneTable(table) {
  return new Promise(function (resolve, reject) {
    let items = '';
    if (table.pk) { items = 'ID DOM_PK PRIMARY KEY'; }
    for (let i = 0, len = table.fields.length; i < len; ++i) {
      let field = table.fields[i];
      if (items != '') { items = items + ','; }
      items = items + field.name.toLowerCase() + ' ' + field.domain.toLowerCase();
    }
    let sql = 'CREATE TABLE ' + table.name.toLowerCase() + ' (' + items + ')';
    db.any(sql)
      .then(function () {
        if (table.pk) {
          sql = 'CREATE SEQUENCE ' + table.name.toLowerCase() + '_ID_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1';
          db.any(sql)
            .then(function () {
              sql = 'ALTER TABLE ' + table.name.toLowerCase() + '_ID_seq OWNER TO postgres';
              db.any(sql)
                .then(function () {
                  sql = 'INSERT INTO ' + table.name.toLowerCase() + '(ID) VALUES (111)';
                  db.any(sql)
                    .then(function () {
                      sql = 'ALTER TABLE ' + table.name.toLowerCase() + ' ALTER COLUMN ID SET DEFAULT nextval(\'' + table.name.toLowerCase() + '_ID_seq\'::regclass)';
                      db.any(sql)
                        .then(function () {
                          console.log('- Table Created -> { ' + table.name.toLowerCase() + ' }');
                          resolve(true);
                        })
                        .catch(function (err) {
                          console.log('- Table Creation : Failed -> { ' + table.name.toLowerCase() + ' } - { ' + err + ' }');
                          reject(false);
                        });
                    })
                    .catch(function (err) {
                      reject(err);
                    });
                })
                .catch(function (err) {
                  reject(err);
                });
            })
            .catch(function (err) {
              reject(err);
            });
        } else {
          console.log('- Table Created -> { ' + table.name.toLowerCase() + ' }');
          resolve(true);
        }
      })
      .catch(function (err) {
        reject(err);
      });
  });
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
            console.log('- Table Creation : Failed -> { ' + err + ' }');
            reject(false);
          });
      });
    })
};

module.exports = {
  createTables: createTables,
};
