import { HTTP_STATUS } from '../../../shared/constants/http/http-status.js';
import { ITEM_CONSTANTS } from '../constants/country.constant.js';
import { validateItem } from '../schemas/country.schema.js';

class Controller {
  constructor(service) {
    this.service = service;
    this.getItems = this.getItems.bind(this);
    this.getItemById = this.getItemById.bind(this);
    this.createItem = this.createItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  async getItems(req, res, next) {
    try {
      const result = await this.service.getItems(req.query);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error) {

      return next(error);
    }
  }

  async getItemById(req, res, next) {
    try {
      const result = await this.service.getItemById(parseInt(req.params.id));
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error) {
      if (error.message === ITEM_CONSTANTS.NOT_FOUND) {
        return next({
          statusCode: HTTP_STATUS.NOT_FOUND,
          message: error.message,
          context: `${req.method} ${req.originalUrl}`,
          details: {
            path: req.originalUrl,
            errorCode: HTTP_STATUS.NOT_FOUND,
            timestamp: new Date().toISOString(),
          },
        });
      }

      return next(error);
    }
  }

  async createItem(req, res, next) {
    try {
      validateItem(req.body);
      const result = await this.service.createItem(req.body);
      res.locals = { data: result, statusCode: HTTP_STATUS.CREATED };

      return next();
    } catch (error) {
      if (error.message === ITEM_CONSTANTS.ALREADY_EXISTS) {
        return next({ statusCode: HTTP_STATUS.CONFLICT, message: error.message });
      }
      if (error.name === 'ValidationError') {
        return next({ statusCode: HTTP_STATUS.BAD_REQUEST, message: error.message });
      }

      return next(error);
    }
  }

  async updateItem(req, res, next) {
    try {
      validateItem(req.body);
      const result = await this.service.updateItem(parseInt(req.params.id), req.body);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error) {
      if (error.message === ITEM_CONSTANTS.NOT_FOUND) {
        return next({ statusCode: HTTP_STATUS.NOT_FOUND, message: error.message });
      }
      if (error.name === 'ValidationError') {
        return next({ statusCode: HTTP_STATUS.BAD_REQUEST, message: error.message });
      }

      return next(error);
    }
  }

  async deleteItem(req, res, next) {
    try {
      const result = await this.service.deleteItem(parseInt(req.params.id));
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error) {
      if (error.message === ITEM_CONSTANTS.NOT_FOUND) {
        return next({ statusCode: HTTP_STATUS.NOT_FOUND, message: error.message });
      }

      return next(error);
    }
  }
}

export default Controller;

