'use strict';

class setupController {

  constructor(databaseService, domainService, tableService) {
    this.databaseService = databaseService;
    this.domainService = domainService;
    this.tableService = tableService;
    this.createDatabase = this.createDatabase.bind(this);
    this.createDomains = this.createDomains.bind(this);
    this.createTables = this.createTables.bind(this);
  }

  async createDomains(req, res, next) {
    try {
      const domainsCreated = await this.domainService.createDomains();
      res.locals.data = domainsCreated;

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async createTables(req, res, next) {
    try {
      const items = await this.tableService.createTables();
      res.locals.data = items;

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async createDatabase(req, res, next) {
    try {
      const items = await this.databaseService.createDatabase();
      res.locals.data = items;

      return next();
    } catch (error) {
      return next(error);
    }
  }

}

module.exports = setupController;
