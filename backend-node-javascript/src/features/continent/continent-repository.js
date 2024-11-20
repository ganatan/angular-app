import DBFactory from '../../core/database/db-adapter-factory.js';
import dbClients from '../../core/database/db-clients-factory.js';
import DB_CLIENTS from '../../core/database/db-clients.js';
import config from '../../core/config/config.js';
import logger from '../../infrastructure/logger/logger.js';

import MOCKAdapter from './continent-repository-mock.js';
import MongoDBAdapter from './continent-repository-mongodb.js';
import MySQLAdapter from './continent-repository-mysql.js';
import PostgreSQLAdapter from './continent-repository-postgresql.js';

class ContinentRepository {
  constructor() {
    try {
      const dbFactory = DBFactory.getInstance(dbClients);
      // const dbConfig = config[process.env.NODE_ENV || 'development'];
      const dbConfig = config;
      this.dbClient = dbFactory.createClient(dbConfig);
      const dbType = dbConfig.db.client;

      switch (dbType) {
        case DB_CLIENTS.MOCK:
          this.adapter = new MOCKAdapter(this.dbClient);
          break;
        case DB_CLIENTS.MONGODB:
          this.adapter = new MongoDBAdapter(this.dbClient);
          break;
        case DB_CLIENTS.MYSQL:
          this.adapter = new MySQLAdapter(this.dbClient);
          break;
        case DB_CLIENTS.PG:
          this.adapter = new PostgreSQLAdapter(this.dbClient);
          break;
        default:
          logger.error(`Unsupported database type: ${dbType}`);
          this.adapter = null;
          break;
      }
    } catch (error) {
      logger.error('Failed to initialize ContinentRepository:', error.message);
    }
  }

  async getItems(req) {
    if (!this.adapter) {
      return { error: 'Database connection not initialized' };
    }

    return await this.adapter.getItems(req);
  }

  async getItem(id) {
    if (!this.adapter) {
      return { error: 'Database connection not initialized' };
    }

    return await this.adapter.getItem(id);
  }

  async createItem(continentData) {
    if (!this.adapter) {
      return { error: 'Database connection not initialized' };
    }

    return await this.adapter.createItem(continentData);
  }

  async updateItem(id, continentData) {
    if (!this.adapter) {
      return { error: 'Database connection not initialized' };
    }

    return await this.adapter.updateItem(id, continentData);
  }

  async deleteItem(id) {
    if (!this.adapter) {
      return { error: 'Database connection not initialized' };
    }

    return await this.adapter.deleteItem(id);
  }
}

export default ContinentRepository;
