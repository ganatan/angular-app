import logger from './logger.js';

const errorLogger = (err, req, res, next) => {
  logger.error(`Error: ${err.message}`, {
    method: req.method,
    url: req.originalUrl,
    stack: err.stack,
    statusCode: err.statusCode || 500,
  });

  next(err);
};

export default errorLogger;
