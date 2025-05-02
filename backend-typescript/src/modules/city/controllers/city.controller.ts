import { Request, Response, NextFunction } from 'express';
import { validateItem } from '../schemas/city.schema';
import service from '../services/city.service';

class Controller {
  async getItems(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const items = service.getItems();
      res.locals = {
        data: items,
        statusCode: 200,
      };

      return next();
    } catch (error: unknown) {
      return next(error);
    }
  }

  async createItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      validateItem(req.body);
      const newItem = service.create(req.body);
      res.locals = {
        data: newItem,
        statusCode: 201,
      };

      return next();
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === 'Item already exists') {
          return next({ statusCode: 409, message: error.message });
        }
        if (error.name === 'ValidationError') {
          return next({ statusCode: 400, message: error.message });
        }

        return next(error);
      }

      return next({ statusCode: 500, message: 'Unexpected error' });
    }
  }
}

export default new Controller();
