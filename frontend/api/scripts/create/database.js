var config = require('../../config.json')[process.env.NODE_ENV || 'dev'];
var login = config.login;
var password = config.password;
var databaseName = config.databaseName;

var promise = require('bluebird');
var options = { promiseLib: promise };
var pgp = require('pg-promise')(options);

var connectionString = "postgres://" + login + ":" + password + "@localhost:5432/postgres";
var db = pgp(connectionString);

var createDB = new Promise(
  function (resolve, reject) {
    console.log('Database creation : ' + databaseName);
    db.any('DROP DATABASE ' + databaseName)
      .then(function () {
        console.log('Drop Database : Executed');
        db.any('CREATE DATABASE ' + databaseName)
          .then(function () {
            console.log('Create Database : Executed');
            db.any('ALTER DATABASE ' + databaseName + ' SET DateStyle =iso, dmy')
              .then(function () {
                console.log('Alter Database executed');
                resolve('Database ' + databaseName + ' Created');
              }
              ).catch(function (err) {
                reject(err);
              });
            }
          ).catch(function (err) {
            reject(err);
          });
      }
      ).catch(function (err) {
        console.log('Drop Database : Not executed');
        db.any('CREATE DATABASE ' + databaseName)
          .then(function () {
            console.log('Create Database : Executed');
            db.any('ALTER DATABASE ' + databaseName + ' SET DateStyle =iso, dmy')
              .then(function () {
                console.log('Alter Database : Executed');
                resolve('Database Creation : Executed');
              }
              ).catch(function (err) {
                reject(err);
              });
          }
          ).catch(function (err) {
            reject(err);
          });
      });
  });

createDB.then(function (res) {
  console.log(res);
  process.exit();
}, function (err) {
  console.log(err);
  process.exit();
});