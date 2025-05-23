import { Request, Response, NextFunction } from 'express';
import logger from '../../infrastructure/logger/logger';

interface HttpError extends Error {
  statusCode?: number;
  context?: string;
  details?: {
    path: string;
    errorCode: number;
    timestamp: string;
    [key: string]: unknown;
  };
}

function errorHandler(err: HttpError, req: Request, res: Response, next: NextFunction): void {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const context = err.context || `${req.method} ${req.originalUrl}`;
  const details = err.details || {
    path: req.originalUrl,
    errorCode: statusCode,
    timestamp: new Date().toISOString(),
  };

  logger.error(`[ERROR] ${statusCode}: ${message}`);
  if (context) {
    logger.error(`[CONTEXT] ${context}`);
  }

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      context,
      details,
    },
  });
}

export default errorHandler;
