import { HTTP_STATUS } from '../constants/http/http-status.js';

class BaseController {
  constructor(service, constants = {}, validators = {}) {
    this.service = service;
    this.constants = constants;
    this.validators = validators;

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
      const id = parseInt(req.params.id);
      const result = await this.service.getItemById(id);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error) {
      if (error.message === this.constants.NOT_FOUND) {
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
      if (this.validators.validateItem) {
        this.validators.validateItem(req.body);
      }

      const result = await this.service.createItem(req.body);
      res.locals = { data: result, statusCode: HTTP_STATUS.CREATED };

      return next();
    } catch (error) {
      if (error.message === this.constants.ALREADY_EXISTS) {
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
      if (this.validators.validateItem) {
        this.validators.validateItem(req.body);
      }

      const id = parseInt(req.params.id);
      const result = await this.service.updateItem(id, req.body);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error) {
      if (error.message === this.constants.NOT_FOUND) {
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
      const id = parseInt(req.params.id);
      const result = await this.service.deleteItem(id);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error) {
      if (error.message === this.constants.NOT_FOUND) {
        return next({ statusCode: HTTP_STATUS.NOT_FOUND, message: error.message });
      }

      return next(error);
    }
  }
}

export default BaseController;
