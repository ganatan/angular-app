'use strict';

const { Pool } = require('pg');

class PostgreSQLClient {
  constructor(dbClient) {
    const dbConfig = {
      user: dbClient.user,
      host: dbClient.host,
      database: dbClient.database,
      password: dbClient.password,
      port: dbClient.port,
    };
    this.pool = new Pool(dbConfig);

    if (PostgreSQLClient.instance) {
      return PostgreSQLClient.instance;
    }
    PostgreSQLClient.instance = this;
  }

  static getInstance(dbClient) {
    if (!PostgreSQLClient.instance) {
      PostgreSQLClient.instance = new PostgreSQLClient(dbClient);
    }

    return PostgreSQLClient.instance;
  }

  async connect() {
    try {
      this.client = await this.pool.connect();

      return true;
    } catch (error) {
      console.error('Error connecting:', error.message);

      return false;
    }
  }

  async query(query, params) {
    try {
      const res = await this.client.query(query, params);

      return res.rows;
    } catch (error) {
      console.error('Error executing PostgreSQL Adapter query:', error.message);

      return 0;
    }
  }

  async close() {
    this.client.release();
  }
}

module.exports = PostgreSQLClient;
