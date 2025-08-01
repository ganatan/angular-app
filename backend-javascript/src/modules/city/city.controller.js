import { HTTP_STATUS } from '../../shared/constants/http/http-status.js';
import { ITEM_CONSTANTS } from './city.constant.js';
import { validateItem } from './city.schema.js';

import { redisClient } from '../../core/cache/redis.client.js';

class Controller {
  constructor(service) {
    this.service = service;
  }

  getItems = async (req, res, next) => {
    try {
      const cacheKey = 'cities:all';
      const cached = await redisClient.get(cacheKey);
      if (cached) {
        res.locals.data = JSON.parse(cached);
        res.locals.statusCode = HTTP_STATUS.OK;

        return next();
      }

      const result = await this.service.getItems(req.query);
      await redisClient.set(cacheKey, JSON.stringify(result), { EX: 300 });

      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error) {

      return next(error);
    }
  };

  getItemById = async (req, res, next) => {
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
  };

  createItem = async (req, res, next) => {
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
  };

  updateItem = async (req, res, next) => {
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
  };

  deleteItem = async (req, res, next) => {
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
  };

}

export default Controller;

