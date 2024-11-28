'use strict';

const { Pool } = require('pg');

const config = {
  host: 'localhost',
  port: 5432,
  database: 'backend_angular',
  user: 'postgres',
  password: 'Trustno1',
};

const pool = new Pool(config);

module.exports = pool;
