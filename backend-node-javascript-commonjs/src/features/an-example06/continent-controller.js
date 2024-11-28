'use strict';

class ContinentController {
  constructor(service) {
    this.service = service;
    this.getItems = this.getItems.bind(this);
  }

  async getItems(req, res, next) {
    try {
      res.locals.data = this.service.getItems();

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = ContinentController;
