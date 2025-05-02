'use strict';

const logger = require('./logger');

const requestLogger = (req, res, next) => {
  logger.info(`[${req.method}] ${req.originalUrl}`);
  next();
};

module.exports = requestLogger;
