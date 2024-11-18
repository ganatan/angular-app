'use strict';

const { createLogger, format, transports } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const { LOG_LEVEL, FILE_PATH, DATE_FORMAT, MAX_LOG_SIZE, MAX_LOG_FILES } = require('../../shared/constants/logging-constants');

const logger = createLogger({
  level: LOG_LEVEL.INFO,
  format: format.combine(
    format.timestamp({ format: DATE_FORMAT }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  transports: [
    // Fichier pour les logs d'erreurs avec rotation par minute
    new DailyRotateFile({
      filename: `${FILE_PATH.ERROR_LOG}-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',  // Rotation par minute
      level: LOG_LEVEL.ERROR,
      maxSize: MAX_LOG_SIZE,
      maxFiles: MAX_LOG_FILES,
      zippedArchive: true,
    }),

    // Fichier pour les logs d'avertissements avec rotation par minute
    new DailyRotateFile({
      filename: `${FILE_PATH.WARN_LOG}-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',  // Rotation par minute
      level: LOG_LEVEL.WARN,
      maxSize: MAX_LOG_SIZE,
      maxFiles: MAX_LOG_FILES,
      zippedArchive: true,
    }),

    // Fichier pour les logs d'information avec rotation par minute
    new DailyRotateFile({
      filename: `${FILE_PATH.INFO_LOG}-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',  // Rotation par minute
      level: LOG_LEVEL.INFO,
      maxSize: MAX_LOG_SIZE,
      maxFiles: MAX_LOG_FILES,
      zippedArchive: true,
    }),

    // Fichier combiné pour tous les logs avec rotation par minute
    new DailyRotateFile({
      filename: `${FILE_PATH.COMBINED_LOG}-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',  // Rotation par minute
      maxSize: MAX_LOG_SIZE,
      maxFiles: MAX_LOG_FILES,
      zippedArchive: true,
    }),
  ],
});

// Console pour les environnements non-production
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple(),
    ),
  }));
}

module.exports = logger;
