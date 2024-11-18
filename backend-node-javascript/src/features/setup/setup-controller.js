class SetupController {
  constructor(setupDatabaseService, setupDomainService, setupTableService) {

    this.setupDatabaseService = setupDatabaseService;
    this.setupDomainService = setupDomainService;
    this.setupTableService = setupTableService;

    this.createDatabase = this.createDatabase.bind(this);
    this.createDomains = this.createDomains.bind(this);
    this.deleteDomains = this.deleteDomains.bind(this);
    this.createTables = this.createTables.bind(this);
  }

  async createDatabase(req, res, next) {
    try {
      const items = await this.setupDatabaseService.createDatabase(req);
      res.locals.data = items;

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async createDomains(req, res, next) {
    try {
      const items = await this.setupDomainService.createDomains(req);
      res.locals.data = items;

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async deleteDomains(req, res, next) {
    try {
      const items = await this.setupDomainService.deleteDomains(req);
      res.locals.data = items;

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async createTables(req, res, next) {
    try {
      const items = await this.setupTableService.createTables(req);
      res.locals.data = items;

      return next();
    } catch (error) {
      return next(error);
    }
  }

}

export default SetupController;

