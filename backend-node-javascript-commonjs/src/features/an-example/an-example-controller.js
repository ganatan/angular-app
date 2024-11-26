'use strict';

const AnExampleService = require('./an-example-service');

class AnExampleController {
  constructor() {
    this.service = new AnExampleService();
    this.getItems = this.getItems.bind(this);
  }

  async getItems(req, res, next) {
    try {
      const { query } = req;
      const items = await this.service.getItems(query);
      res.locals.data = items;

      return next();
    } catch (error) {

      return next(error);
    }
  }

}

module.exports = AnExampleController;
