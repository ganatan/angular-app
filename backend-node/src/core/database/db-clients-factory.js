import DB_CLIENTS from './db-clients.js';
import MockClient from './adapters/mock-adapter.js';
import MongoDBClient from './adapters/mongodb-adapter.js';
import MySQLClient from './adapters/mysql-adapter.js';
import PostgreSQLClient from './adapters/postgres-adapter.js';

const dbClients = {
  [DB_CLIENTS.MOCK]: MockClient,
  [DB_CLIENTS.MONGODB]: MongoDBClient,
  [DB_CLIENTS.MYSQL]: MySQLClient,
  [DB_CLIENTS.PG]: PostgreSQLClient,
};

export default dbClients;
