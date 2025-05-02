import { Request, Response, NextFunction } from 'express';

interface NotFoundError extends Error {
  statusCode?: number;
  context?: string;
  details?: {
    path: string;
    errorCode: number;
    timestamp: string;
    [key: string]: unknown;
  };
}

const notFoundHandler = (req: Request, res: Response, next: NextFunction): void => {
  if (res.locals.data === undefined) {
    const error: NotFoundError = new Error('Resource not found');
    error.statusCode = 404;
    error.context = `${req.method} ${req.originalUrl}`;
    error.details = {
      path: req.originalUrl,
      errorCode: 404,
      timestamp: new Date().toISOString(),
    };

    return next(error);
  } else {
    return next();
  }
};

export default notFoundHandler;
