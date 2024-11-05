'use strict';

class PostgreSQLClient {

    constructor(dbClient) {
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

}

// module.exports = PostgreSQLClient;
export default PostgreSQLClient;



/*
  async connect() {
    console.log('00000000001:PostgreSQLClient:connect:');
    try {
      this.client2 = 'mlkjmlkj';
      console.log('00000000001:PostgreSQLClient:connect:' + this.client2);
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
    */

