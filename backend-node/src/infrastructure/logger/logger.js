import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

import { LOG_LEVEL, FILE_PATH, DATE_FORMAT, MAX_LOG_SIZE, MAX_LOG_FILES } from '../../shared/constants/logging-constants.js';

const logger = createLogger({
  level: LOG_LEVEL.INFO,
  format: format.combine(
    format.timestamp({ format: DATE_FORMAT }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  transports: [
    new DailyRotateFile({
      filename: `${FILE_PATH.ERROR_LOG}-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      level: LOG_LEVEL.ERROR,
      maxSize: MAX_LOG_SIZE,
      maxFiles: MAX_LOG_FILES,
      zippedArchive: true,
    }),

    new DailyRotateFile({
      filename: `${FILE_PATH.WARN_LOG}-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      level: LOG_LEVEL.WARN,
      maxSize: MAX_LOG_SIZE,
      maxFiles: MAX_LOG_FILES,
      zippedArchive: true,
    }),

    new DailyRotateFile({
      filename: `${FILE_PATH.INFO_LOG}-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      level: LOG_LEVEL.INFO,
      maxSize: MAX_LOG_SIZE,
      maxFiles: MAX_LOG_FILES,
      zippedArchive: true,
    }),

    new DailyRotateFile({
      filename: `${FILE_PATH.COMBINED_LOG}-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      maxSize: MAX_LOG_SIZE,
      maxFiles: MAX_LOG_FILES,
      zippedArchive: true,
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple(),
    ),
  }));
}

export default logger;
