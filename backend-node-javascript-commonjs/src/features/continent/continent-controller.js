'use strict';

const ITEM_NAME = 'Continent';

class ContinentController {
  constructor(service) {
    this.service = service;

    this.createItem = this.createItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.getItems = this.getItems.bind(this);
    this.getItem = this.getItem.bind(this);
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

  async getItem(req, res, next) {
    const { id } = req.params;
    try {
      const item = await this.service.getItem(id);
      if (!item) {
        return next({ status: 404, message: `${ITEM_NAME} not found` });
      }
      res.locals.data = item;

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async createItem(req, res, next) {
    try {
      const { body } = req;
      const newItem = await this.service.createItem(body);
      res.locals.data = newItem;

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async updateItem(req, res, next) {
    const { id } = req.params;
    const { body } = req;
    try {
      const updatedItem = await this.service.updateItem(id, body);
      if (!updatedItem) {
        return next({ status: 404, message: `${ITEM_NAME} not found` });
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
      const deletedItem = await this.service.deleteItem(id);
      if (!deletedItem) {
        return next({ status: 404, message: `${ITEM_NAME} not found` });
      }
      res.locals.data = { message: `${ITEM_NAME} deleted successfully` };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = ContinentController;
