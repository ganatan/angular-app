'use strict';

class DBConnectionService {
  constructor(dbFactory, config) {
    this.dbFactory = dbFactory;
    this.config = config;
  }

  createClient() {
    const dbConfig = this.config;

    return this.dbFactory.createClient(dbConfig);
  }
}

module.exports = DBConnectionService;
