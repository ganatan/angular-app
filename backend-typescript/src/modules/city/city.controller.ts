import { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS } from '../../shared/constants/http/http-status';
import { ITEM_CONSTANTS } from './city.constant';
import { validateItem } from './city.schema';
import Service from './city.service';
import { City } from './city.model';

export default class Controller {
  private service: Service;

  constructor(service: Service) {
    this.service = service;

    this.getItems = this.getItems.bind(this);
    this.getItemById = this.getItemById.bind(this);
    this.createItem = this.createItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  async getItems(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.service.getItems(req.query);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async getItemById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const result = await this.service.getItemById(id);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error: any) {
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

  async createItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      validateItem(req.body);
      const result = await this.service.createItem(req.body as City);
      res.locals = { data: result, statusCode: HTTP_STATUS.CREATED };

      return next();
    } catch (error: any) {
      if (error.message === ITEM_CONSTANTS.ALREADY_EXISTS) {

        return next({ statusCode: HTTP_STATUS.CONFLICT, message: error.message });
      }
      if (error.name === 'ValidationError') {

        return next({ statusCode: HTTP_STATUS.BAD_REQUEST, message: error.message });
      }

      return next(error);
    }
  }

  async updateItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      validateItem(req.body);
      const id = parseInt(req.params.id, 10);
      const result = await this.service.updateItem(id, req.body);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error: any) {
      if (error.message === ITEM_CONSTANTS.NOT_FOUND) {
        return next({ statusCode: HTTP_STATUS.NOT_FOUND, message: error.message });
      }
      if (error.name === 'ValidationError') {
        return next({ statusCode: HTTP_STATUS.BAD_REQUEST, message: error.message });
      }

      return next(error);
    }
  }

  async deleteItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const result = await this.service.deleteItem(id);
      res.locals = { data: result, statusCode: HTTP_STATUS.OK };

      return next();
    } catch (error: any) {
      if (error.message === ITEM_CONSTANTS.NOT_FOUND) {
        return next({ statusCode: HTTP_STATUS.NOT_FOUND, message: error.message });
      }

      return next(error);
    }
  }
}
