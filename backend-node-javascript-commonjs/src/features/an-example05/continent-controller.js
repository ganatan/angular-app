'use strict';

class ContinentController {
  constructor(service) {
    this.service = service;
    this.getItems = this.getItems.bind(this);
  }

  async getItems(req, res, next) {
    try {
      const items = await this.service.getItems();
      res.locals.data = items;

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = ContinentController;
