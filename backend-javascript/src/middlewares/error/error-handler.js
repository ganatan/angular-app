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

  const logMessage = `[${req.method}] ${req.originalUrl} - ${statusCode} ${message}`;
  const logData = {
    method: req.method,
    route: req.originalUrl,
    statusCode: statusCode,
    message: message,
    context: context,
    details: details,
    stack: err.stack,
  };

  if (statusCode >= 500) {
    logger.error(logMessage, logData);
  } else {
    logger.warn(logMessage, logData);
  }

  res.status(statusCode).json({
    success: false,
    error: { message, context, details },
  });
}

export default errorHandler;

