'use strict';

class ContinentController {
  constructor(continentService) {
    this.continentService = continentService;

    this.createItem = this.createItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.getItems = this.getItems.bind(this);
    this.getItem = this.getItem.bind(this);
  }

  async getItems(req, res, next) {
    try {
      const items = await this.continentService.getItems(req);
      res.locals.data = items;

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async getItem(req, res, next) {
    const { id } = req.params;
    try {
      const item = await this.continentService.getItem(id);
      if (!item) {
        return next({ status: 404, message: 'Continent not found' });
      }
      res.locals.data = item;

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async createItem(req, res, next) {
    try {
      const newItem = await this.continentService.createItem(req.body);
      res.locals.data = newItem;

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async updateItem(req, res, next) {
    const { id } = req.params;
    try {
      const updatedItem = await this.continentService.updateItem(id, req.body);
      if (!updatedItem) {
        return next({ status: 404, message: 'Continent not found' });
      }
      res.locals.data = updatedItem;

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async deleteItem(req, res, next) {
    const { id } = req.params;
    try {
      const deletedItem = await this.continentService.deleteItem(id);
      if (!deletedItem) {
        return next({ status: 404, message: 'Continent not found' });
      }
      res.locals.data = { message: 'Continent deleted successfully' };

      return next();
    } catch (error) {

      return next(error);
    }
  }
}

module.exports = ContinentController;
