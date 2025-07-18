import { HTTP_STATUS } from '../../shared/constants/http/http-status.js';
import { ITEM_CONSTANTS } from './person.constant.js';
import { validateItem } from './person.schema.js';

const validatePositiveInteger = (value, fieldName = 'ID') => {
  const parsed = parseInt(value);
  if (isNaN(parsed) || parsed <= 0) {
    throw new Error(`Invalid ${fieldName} parameter. Must be a positive integer.`);
  }

  return parsed;
};

class Controller {
  constructor(service) {
    this.service = service;
  }

  getItems = async (req, res, next) => {
    try {

      // throw new Error('Erreur volontaire');

      const result = await this.service.getItems(req.query);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error) {

      return next(error);
    }
  };

  getItemById = async (req, res, next) => {
    try {
      const id = validatePositiveInteger(req.params.id);

      const result = await this.service.getItemById(id);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();

    } catch (error) {
      if (error.message.includes('Invalid') && error.message.includes('parameter')) {
        return next({
          statusCode: HTTP_STATUS.BAD_REQUEST,
          message: error.message,
          context: `${req.method} ${req.originalUrl}`,
          details: {
            path: req.originalUrl,
            errorCode: HTTP_STATUS.BAD_REQUEST,
            timestamp: new Date().toISOString(),
            receivedId: req.params.id,
          },
        });
      }

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
      const id = validatePositiveInteger(req.params.id);

      validateItem(req.body);
      const result = await this.service.updateItem(id, req.body);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();

    } catch (error) {
      if (error.message.includes('Invalid') && error.message.includes('parameter')) {
        return next({
          statusCode: HTTP_STATUS.BAD_REQUEST,
          message: error.message,
          context: `${req.method} ${req.originalUrl}`,
          details: {
            path: req.originalUrl,
            errorCode: HTTP_STATUS.BAD_REQUEST,
            timestamp: new Date().toISOString(),
            receivedId: req.params.id,
          },
        });
      }

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
      if (error.name === 'ValidationError') {
        return next({ statusCode: HTTP_STATUS.BAD_REQUEST, message: error.message });
      }

      return next(error);
    }
  };

  deleteItem = async (req, res, next) => {
    try {
      const id = validatePositiveInteger(req.params.id);

      const result = await this.service.deleteItem(id);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();

    } catch (error) {
      if (error.message.includes('Invalid') && error.message.includes('parameter')) {
        return next({
          statusCode: HTTP_STATUS.BAD_REQUEST,
          message: error.message,
          context: `${req.method} ${req.originalUrl}`,
          details: {
            path: req.originalUrl,
            errorCode: HTTP_STATUS.BAD_REQUEST,
            timestamp: new Date().toISOString(),
            receivedId: req.params.id,
          },
        });
      }

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

}

export default Controller;

