'use strict';

class ContinentController {
  constructor() {}

  async getItems(req, res, next) {
    try {
      const items = [
        { name: 'continent0001' },
        { name: 'continent0002' },
        { name: 'continent0003' },
        { name: 'continent0004' },
      ];
      res.locals.data = items;

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = ContinentController;
