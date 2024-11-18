'use strict';

const DBFactory = require('../../core/database/db-adapter-factory');
const dbClients = require('../../core/database/db-clients-factory');
const DB_CLIENTS = require('../../core/database/db-clients');
const config = require('../../core/config/config');
const logger = require('../../infrastructure/logger/logger');

const MOCKAdapter = require('./continent-repository-mock');
const MongoDBAdapter = require('./continent-repository-mongodb');
const MySQLAdapter = require('./continent-repository-mysql');
const PostgreSQLAdapter = require('./continent-repository-postgresql');

class ContinentRepository {
  constructor() {
    try {
      const dbFactory = DBFactory.getInstance(dbClients);
      const dbConfig = config[process.env.NODE_ENV || 'development'];
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

module.exports = ContinentRepository;
