var config = require('../config.json')[process.env.NODE_ENV || 'dev'];
var login = config.login;
var password = config.password;
var databaseName = config.databaseName;

var promise = require('bluebird');
const options = {
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
var connectionString = "postgres://" + login + ":" + password + "@localhost:5432/" + databaseName;
const db = pgp(connectionString);

module.exports = db;
