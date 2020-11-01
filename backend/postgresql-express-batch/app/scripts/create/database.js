const config = require('../../config/config.json')[process.env.NODE_ENV || 'dev'];

const promise = require('bluebird');
const pgp = require('pg-promise')({
  promiseLib: promise
});

/* Connection without databasename for DROP DATABASE Command */
const connection = {
  host: config.dbHost,
  port: config.dbPort,
  user: config.dbUser,
  password: config.dbPassword,
  max: config.dbMax
};
const db = pgp(connection);

const databaseName = config.dbName;
const databaseType = config.databaseType;

let url = 'pg://' + config.dbUser + ':*******' + '@' + config.dbHost + ':' + config.dbPort;
db.connect()
  .then(obj => {
    console.log('- ' + databaseType + ' Server Connection -> { ' + url + ' }');
    console.log('- Connection Started');
  })
  .catch(err => {
    console.log('- ' + databaseType + ' Server Connection -> { ' + url + ' }');
    console.log('- Connection failed -> { ' + err + ' }');
    console.log('- Database Creation Failed - > DatabaseName - { ' + databaseName + ' }');
    process.exit();
  });

function createDatabase() {
  return new Promise(function (resolve, reject) {
    console.log('- Database Creation Started -> DatabaseName - { ' + databaseName + ' }');
    db.any('DROP DATABASE ' + databaseName)
      .then(function () {
        console.log('- DROP DATABASE -> Executed');
        db.any('CREATE DATABASE ' + databaseName)
          .then(function () {
            console.log('- CREATE DATABASE -> Executed');
            db.any('ALTER DATABASE ' + databaseName + ' SET DateStyle =iso, dmy')
              .then(function () {
                console.log('- ALTER DATABASE -> Executed');
                resolve(true);
              })
              .catch(function (err) {
                console.log('- ALTER DATABASE -> Failed ' + err);
                reject(err);
              });
          })
          .catch(function (err) {
            console.log('- CREATE DATABASE -> Failed ' + err);
            reject(err);
          });
      })
      .catch(function (err) {
        console.log('- DROP DATABASE : failed -> { ' + err + ' }');
        db.any('CREATE DATABASE ' + databaseName)
          .then(function () {
            console.log('- CREATE DATABASE -> Executed');
            db.any('ALTER DATABASE ' + databaseName + ' SET DateStyle =iso, dmy')
              .then(function () {
                console.log('- ALTER DATABASE -> Executed');
                resolve(true);
              })
              .catch(function (err) {
                console.log('- ALTER DATABASE : Failed -> { ' + err + ' }');
                reject(err);
              });
          })
          .catch(function (err) {
            reject(err);
          });
      });
  });
}

createDatabase()
  .then(res => {
    console.log('- Database Creation finished - > DatabaseName - { ' + databaseName + ' }');
    process.exit();
  })
  .catch(err => {
    console.log('- Database Creation failed -> { ' + err + ' }');
    process.exit();
  });  