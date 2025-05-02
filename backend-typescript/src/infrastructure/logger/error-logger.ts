import { Request, Response, NextFunction } from 'express';
import logger from './logger';

type ErrorWithStatus = Error & { statusCode?: number };

const errorLogger = (
  err: ErrorWithStatus,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  logger.error(`Error: ${err.message}`, {
    method: req.method,
    url: req.originalUrl,
    statusCode: err.statusCode || 500,
  });

  return next(err);
};

export default errorLogger;
