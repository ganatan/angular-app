import { Request, Response, NextFunction } from 'express';
import logger from './logger';

const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  logger.info(`[${req.method}] ${req.originalUrl}`);
  next();
};

export default requestLogger;
