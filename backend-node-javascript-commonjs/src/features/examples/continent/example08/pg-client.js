'use strict';

const { Client } = require('pg');

const config = {
  host: 'localhost',
  port: 5432,
  database: 'backend_angular',
  user: 'postgres',
  password: 'Trustno1',
};

const getClient = () => {
  const client = new Client(config);
  client.connect();

  return client;
};

module.exports = getClient;
