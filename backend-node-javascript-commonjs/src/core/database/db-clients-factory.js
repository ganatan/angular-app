'use strict';

const DB_CLIENTS = require('./db-clients');

const MockClient = require('./adapters/mock-adapter');
const MongoDBClient = require('./adapters/mongodb-adapter');
const MySQLClient = require('./adapters/mysql-adapter');
const PostgreSQLClient = require('./adapters/postgres-adapter');

const dbClients = {
  [DB_CLIENTS.MOCK]: MockClient,
  [DB_CLIENTS.MONGODB]: MongoDBClient,
  [DB_CLIENTS.MYSQL]: MySQLClient,
  [DB_CLIENTS.PG]: PostgreSQLClient,
};

module.exports = dbClients;
