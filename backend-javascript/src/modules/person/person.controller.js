import { HTTP_STATUS } from '../../shared/constants/http/http-status.js';
import { ITEM_CONSTANTS } from './person.constant.js';
import { validateItem } from './person.schema.js';

import { redisClient, isRedisAvailable } from '../../core/cache/redis.client.js';

const validatePositiveInteger = (value, fieldName = 'ID') => {
  const parsed = parseInt(value);
  if (isNaN(parsed) || parsed <= 0) {
    return { valid: false, message: `Invalid ${fieldName} parameter. Must be a positive integer.` };
  }

  return { valid: true, value: parsed };
};

const buildError = (statusCode, message, req, details = {}) => ({
  statusCode: statusCode,
  message: message,
  context: `${req.method} ${req.originalUrl}`,
  details: {
    path: req.originalUrl,
    errorCode: statusCode,
    timestamp: new Date().toISOString(),
    ...details,
  },
});

class Controller {
  constructor(service) {
    this.service = service;
  }

  handleKnownErrors = (error, req, next) => {
    const errorMap = {
      [ITEM_CONSTANTS.NOT_FOUND]: HTTP_STATUS.NOT_FOUND,
      [ITEM_CONSTANTS.ALREADY_EXISTS]: HTTP_STATUS.CONFLICT,
    };

    const statusCode = errorMap[error.message];
    if (statusCode) {
      return next(buildError(statusCode, error.message, req));
    }

    return next(error);
  };

  getItems = async (req, res, next) => {
    const cacheKey = 'persons:all';
    let cached;

    if (isRedisAvailable()) {
      try {
        cached = await redisClient.get(cacheKey);
      } catch {
        cached = null;
      }
    }

    if (cached) {
      res.locals.data = JSON.parse(cached);
      res.locals.statusCode = HTTP_STATUS.OK;

      return next();
    }

    const result = await this.service.getItems(req.query);

    if (isRedisAvailable()) {
      try {
        await redisClient.set(cacheKey, JSON.stringify(result), { EX: 300 });
      } catch {
        console.warn('Redis set failed (ignored)');
      }
    }

    res.locals.data = result;
    res.locals.statusCode = HTTP_STATUS.OK;

    return next();
  };

  getItemById = async (req, res, next) => {
    try {
      const { valid, message, value } = validatePositiveInteger(req.params.id);
      if (!valid) {
        return next(buildError(HTTP_STATUS.BAD_REQUEST, message, req, { receivedId: req.params.id }));
      }

      const result = await this.service.getItemById(value);
      res.locals.data = result;
      res.locals.statusCode = HTTP_STATUS.OK;

      return next();
    } catch (error) {
      return this.handleKnownErrors(error, req, next);
    }
  };

  createItem = async (req, res, next) => {
    try {
      const validation = validateItem(req.body);
      if (!validation.valid) {
        return next(buildError(HTTP_STATUS.BAD_REQUEST, validation.message, req));
      }

      const result = await this.service.createItem(req.body);
      res.locals.data = result;
      res.locals.statusCode = HTTP_STATUS.CREATED;

      return next();
    } catch (error) {
      return this.handleKnownErrors(error, req, next);
    }
  };

  updateItem = async (req, res, next) => {
    try {
      const { valid, message, value } = validatePositiveInteger(req.params.id);
      if (!valid) {
        return next(buildError(HTTP_STATUS.BAD_REQUEST, message, req, { receivedId: req.params.id }));
      }

      const validation = validateItem(req.body);
      if (!validation.valid) {
        return next(buildError(HTTP_STATUS.BAD_REQUEST, validation.message, req));
      }

      const result = await this.service.updateItem(value, req.body);
      res.locals.data = result;
      res.locals.statusCode = HTTP_STATUS.OK;

      return next();
    } catch (error) {
      return this.handleKnownErrors(error, req, next);
    }
  };

  deleteItem = async (req, res, next) => {
    try {
      const { valid, message, value } = validatePositiveInteger(req.params.id);
      if (!valid) {
        return next(buildError(HTTP_STATUS.BAD_REQUEST, message, req, { receivedId: req.params.id }));
      }

      const result = await this.service.deleteItem(value);
      res.locals.data = result;
      res.locals.statusCode = HTTP_STATUS.OK;

      return next();
    } catch (error) {
      return this.handleKnownErrors(error, req, next);
    }
  };
}

export default Controller;
