'use strict';

const cityController = require('../../controllers/city.controller');
const service = require('../../services/city.service');
const { validateItem } = require('../../schemas/city.schema');

jest.mock('../../services/city.service');
jest.mock('../../schemas/city.schema');

describe('CityController', () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: {}, query: {} };
    res = {
      locals: {},
    };
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getItems', () => {
    it('should set res.locals with items and call next()', async () => {
      const mockItems = [{ id: 1, name: 'Paris' }];
      service.getItems.mockReturnValue(mockItems);

      await cityController.getItems(req, res, next);

      expect(res.locals).toEqual({
        data: mockItems,
        statusCode: 200,
      });
      expect(next).toHaveBeenCalledWith();
    });

    it('should call next with error if getItems throws', async () => {
      const error = new Error('Database error');
      service.getItems.mockImplementation(() => {
        throw error;
      });

      await cityController.getItems(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe('createItem', () => {
    it('should validate, create new item, set res.locals, and call next()', async () => {
      const newCity = { name: 'New York' };
      req.body = newCity;

      validateItem.mockImplementation(() => {});
      service.create.mockReturnValue({ id: 1, ...newCity });

      await cityController.createItem(req, res, next);

      expect(validateItem).toHaveBeenCalledWith(req.body);
      expect(service.create).toHaveBeenCalledWith(req.body);
      expect(res.locals).toEqual({
        data: { id: 1, ...newCity },
        statusCode: 201,
      });
      expect(next).toHaveBeenCalledWith();
    });

    it('should call next with 409 if item already exists', async () => {
      req.body = { name: 'Paris' };

      validateItem.mockImplementation(() => {});
      service.create.mockImplementation(() => {
        const error = new Error('Item already exists');
        throw error;
      });

      await cityController.createItem(req, res, next);

      expect(next).toHaveBeenCalledWith({
        statusCode: 409,
        message: 'Item already exists',
      });
    });

    it('should call next with 400 if validation error occurs', async () => {
      req.body = {};

      const validationError = new Error('Invalid data');
      validationError.name = 'ValidationError';
      validateItem.mockImplementation(() => {
        throw validationError;
      });

      await cityController.createItem(req, res, next);

      expect(next).toHaveBeenCalledWith({
        statusCode: 400,
        message: 'Invalid data',
      });
    });

    it('should call next with error if unknown error occurs', async () => {
      req.body = { name: 'CityName' };

      validateItem.mockImplementation(() => {});
      const unknownError = new Error('Unknown error');
      service.create.mockImplementation(() => {
        throw unknownError;
      });

      await cityController.createItem(req, res, next);

      expect(next).toHaveBeenCalledWith(unknownError);
    });
  });
});
