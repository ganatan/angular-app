var fs = require('fs');
const db = require("../connection");

function createTables(fileName) {
  return new Promise(
    function (resolve, reject) {
      console.log('Create Tables from : ' + fileName);
      fs.readFile('./scripts/tables/' + fileName, 'utf8', function (err, data) {
        if (err) reject(err);
        var promises = [];
        var tables = JSON.parse(data);
        for (var i = 0, len = tables.length; i < len; ++i) {
          var table = tables[i];
          promises.push(createTable(table));
        }
        Promise.all(promises).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    })
};

function createTable(table) {
  return new Promise(function (resolve, reject) {
    request = 'CREATE TABLE ' + table.name.toUpperCase() + '(ID DOM_PK PRIMARY KEY';
    if (table.fields) {
      for (var i = 0, len = table.fields.length; i < len; ++i) {
        var field = table.fields[i];
        request = request + ',' + field.name.toUpperCase() + ' ' + field.domain.toUpperCase();
      }
    }
    request = request + ')';
    db.any(request)
      .then(function () {
        request = 'CREATE SEQUENCE ' + table.name.toUpperCase() + '_ID_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1000 CACHE 1';
        db.any(request)
          .then(function () {
            request = 'ALTER TABLE ' + table.name.toUpperCase() + '_ID_seq OWNER TO postgres';
            db.any(request)
              .then(function () {
                request = 'INSERT INTO ' + table.name.toUpperCase() + '(ID) VALUES (111)';
                db.any(request)
                  .then(function () {
                    request = 'ALTER TABLE ' + table.name.toUpperCase() + ' ALTER COLUMN ID SET DEFAULT nextval(\'' + table.name.toUpperCase() + '_ID_seq\'::regclass)';
                    db.any(request)
                      .then((res) => {
                        resolve('Table ' + table.name.toUpperCase() + ' Created');
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
          })
          .catch(function (err) {
            reject(err);
          });
      })
      .catch(function (err) {
        reject(err);
      });
  });
}

module.exports = {
  createTables: createTables,
};
