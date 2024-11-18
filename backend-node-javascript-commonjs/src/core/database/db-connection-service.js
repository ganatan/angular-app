'use strict';

class DBConnectionService {
  constructor(dbFactory, config) {
    this.dbFactory = dbFactory;
    this.config = config;
  }

  createClient() {
    const dbConfig = this.config[process.env.NODE_ENV || 'development'];

    return this.dbFactory.createClient(dbConfig);
  }
}

module.exports = DBConnectionService;
