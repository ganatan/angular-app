'use strict';

const LOG_LEVEL = {
  INFO: 'info',
  ERROR: 'error',
  WARN: 'warn',
  DEBUG: 'debug',
};

const FILE_PATH = {
  ERROR_LOG: 'data/logs/error.log',
  WARN_LOG: 'data/logs/warn.log',
  INFO_LOG: 'data/logs/info.log',
  DEBUG_LOG: 'data/logs/debug.log',
  COMBINED_LOG: 'data/logs/combined.log',
};

const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

const MAX_LOG_SIZE = '20m';
const MAX_LOG_FILES = '14d';

module.exports = {
  LOG_LEVEL,
  FILE_PATH,
  DATE_FORMAT,
  MAX_LOG_SIZE,
  MAX_LOG_FILES,
};
