'use strict';

const logger = require('../logger/logger');

const requestLogger = (req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl} - ${req.ip}`);
  next();
};

module.exports = requestLogger;
