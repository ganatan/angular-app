import logger from '../../infrastructure/logger/logger.js';

function errorHandler(err, req, res, next) {
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
