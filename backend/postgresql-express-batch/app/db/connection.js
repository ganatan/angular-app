const config = require('../config/config.json')[process.env.NODE_ENV || 'dev'];

const promise = require('bluebird');
const pgp = require('pg-promise')({
  promiseLib: promise
});

const connection = {
  host: config.dbHost,
  port: config.dbPort,
  database: config.dbName,
  user: config.dbUser,
  password: config.dbPassword,
  max: config.dbMax
};
const db = pgp(connection);

const databaseType = config.databaseType;

let url = 'pg://' + config.dbUser + ':*******' + '@' + config.dbHost + ':' + config.dbPort + '/' + config.dbName;
db.connect()
  .then(obj => {
    console.log('- ' + databaseType + ' Database Connection -> { ' + url + ' }');
    console.log('- Connection Started');
  })
  .catch(err => {
    console.log('- ' + databaseType + ' Database Connection -> { ' + url + ' }');
    console.log('- Connection Failed -> { ' + err + ' }');
  });

module.exports = db;



