'use strict';

const { pgPostgresPool } = require('./database-connection');

class DatabaseService {

  createDatabase = async () => {

    const createDatabaseName = 'woper';
    const client = await pgPostgresPool.connect();
    console.log(`Connected to PostgreSQL as ${client.user}`);

    let errorMessage = null;

    try {
      await this.closeConnections(client, createDatabaseName);
      await this.dropOneDatabase(client, createDatabaseName);
      await this.createOneDatabase(client, createDatabaseName);
      await this.setDatabaseDateStyle(client, createDatabaseName);
    } catch (err) {
      console.error('Error managing database creation: ');
      console.error(`Error message : ${err.message}`);
      errorMessage = err.message;
    } finally {
      client.release();
      if (errorMessage) {
        console.log('Database connection failed');

        return {
          message: 'Database creation failed',
          error: errorMessage,
        };
      }
      console.log('Database connection released');

      return { message: 'Database creation completed' };
    }
  };

  closeConnections = async (client, databaseName) => {
    try {
      await client.query(`
      SELECT pg_terminate_backend(pg_stat_activity.pid)
      FROM pg_stat_activity
      WHERE pg_stat_activity.datname = $1
        AND pid <> pg_backend_pid();
    `, [databaseName]);
      console.log(`Closed active connections to database ${databaseName}`);
    } catch (err) {
      console.error(`Error on terminating connections for database ${databaseName}:`);
      throw err;
    }
  };

  dropOneDatabase = async (client, databaseName) => {
    try {
      await client.query(`DROP DATABASE IF EXISTS ${databaseName}`);
      console.log(`Database ${databaseName} dropped`);
    } catch (err) {
      console.error(`Error dropping database ${databaseName}:`);
      throw err;
    }
  };

  createOneDatabase = async (client, databaseName) => {
    try {
      await client.query(`CREATE DATABASE ${databaseName}`);
      console.log(`Database ${databaseName} created`);
    } catch (err) {
      console.error(`Error creating database ${databaseName}:`);
      throw err;
    }
  };

  setDatabaseDateStyle = async (client, databaseName) => {
    try {
      await client.query(`ALTER DATABASE ${databaseName} SET DateStyle = 'ISO, DMY'`);
      console.log(`DateStyle for database ${databaseName} set to ISO, DMY`);
    } catch (err) {
      console.error(`Error setting DateStyle for database ${databaseName}:`, err);
      throw err;
    }
  };

}

module.exports = DatabaseService;
