import { Request, Response, NextFunction } from 'express';

const initLocals = (req: Request, res: Response, next: NextFunction): void => {
  res.locals = res.locals || {};
  next();
};

export default initLocals;
