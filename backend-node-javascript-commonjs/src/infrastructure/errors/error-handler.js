'use strict';

const logger = require('../logger/logger');

const handleError = (err, req, res, next) => {
  const statusCode = err.status || 500;

  console.error(`
    ────────────────────────────────────────────────
    ❌  Error Details:
    ────────────────────────────────────────────────
    🗒️  Message     : ${err.message || 'Unknown error'}
    📄  Request     : ${req.method} ${req.originalUrl}
    🌐  IP Address  : ${req.ip}
    🛠️  Status Code : ${statusCode}
    ────────────────────────────────────────────────
  `);

  logger.error(`Error: ${err.message || 'Unknown error'}`);
  logger.error(`Request: ${req.method} ${req.originalUrl}`);
  logger.error(`IP Address: ${req.ip}`);

  res.status(statusCode).json({ error: err.message || 'Internal Server Error' });
};

module.exports = handleError;
