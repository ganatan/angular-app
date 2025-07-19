import { HTTP_STATUS } from '../../shared/constants/http/http-status.js';
import { ITEM_CONSTANTS } from './person.constant.js';
import { validateItem } from './person.schema.js';

const validatePositiveInteger = (value, fieldName = 'ID') => {
  const parsed = parseInt(value);
  if (isNaN(parsed) || parsed <= 0) {
    return { valid: false, message: `Invalid ${fieldName} parameter. Must be a positive integer.`, value: value };
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

  getItems = async (req, res, next) => {
    try {
      const result = await this.service.getItems(req.query);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error) {
      return next(error);
    }
  };

  getItemById = async (req, res, next) => {
    try {
      const { valid, message, value } = validatePositiveInteger(req.params.id);
      if (!valid) {
        return next(buildError(HTTP_STATUS.BAD_REQUEST, message, req, { receivedId: req.params.id }));
      }

      const result = await this.service.getItemById(value);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error) {
      if (error.message === ITEM_CONSTANTS.NOT_FOUND) {
        return next(buildError(HTTP_STATUS.NOT_FOUND, error.message, req));
      }

      return next(error);
    }
  };

  createItem = async (req, res, next) => {
    try {
      const validation = validateItem(req.body);
      if (!validation.valid) {
        return next({
          statusCode: HTTP_STATUS.BAD_REQUEST,
          message: validation.message,
        });
      }
      const result = await this.service.createItem(req.body);
      res.locals = { data: result, statusCode: HTTP_STATUS.CREATED };

      return next();
    } catch (error) {
      if (error.message === ITEM_CONSTANTS.ALREADY_EXISTS) {
        return next(buildError(HTTP_STATUS.CONFLICT, error.message, req));
      }

      return next(error);
    }
  };

  updateItem = async (req, res, next) => {
    try {
      const { valid, message, value } = validatePositiveInteger(req.params.id);
      if (!valid) {
        return next(buildError(HTTP_STATUS.BAD_REQUEST, message, req, { receivedId: req.params.id }));
      }

      const validation = validateItem(req.body);
      if (validation?.error) {
        return next(buildError(HTTP_STATUS.BAD_REQUEST, validation.error, req));
      }

      const result = await this.service.updateItem(value, req.body);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error) {
      if (error.message === ITEM_CONSTANTS.NOT_FOUND) {
        return next(buildError(HTTP_STATUS.NOT_FOUND, error.message, req));
      }

      return next(error);
    }
  };

  deleteItem = async (req, res, next) => {
    try {
      const { valid, message, value } = validatePositiveInteger(req.params.id);
      if (!valid) {
        return next(buildError(HTTP_STATUS.BAD_REQUEST, message, req, { receivedId: req.params.id }));
      }

      const result = await this.service.deleteItem(value);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error) {
      if (error.message === ITEM_CONSTANTS.NOT_FOUND) {
        return next(buildError(HTTP_STATUS.NOT_FOUND, error.message, req));
      }

      return next(error);
    }
  };
}

export default Controller;
