import { createLogger, transports, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { ElasticsearchTransport } from 'winston-elasticsearch';

const ELASTIC_INDEX_PREFIX = process.env.ELASTIC_INDEX_PREFIX || 'backend-javascript-logs';

const transportsArray = [];

if (process.env.LOGSTASH_ENABLED === 'true') {
  transportsArray.push(
    new DailyRotateFile({
      filename: 'logs/logstash-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      level: 'info',
      zippedArchive: true,
      maxSize: '10m',
      maxFiles: '30d',
    }),
  );
} else if (process.env.ELASTIC_ENABLED === 'true') {
  const esTransport = new ElasticsearchTransport({
    level: 'info',
    indexPrefix: ELASTIC_INDEX_PREFIX,
    clientOpts: {
      node: process.env.ELASTICSEARCH_NODE || 'http://localhost:9200',
    },
  });
  transportsArray.push(esTransport);
}

transportsArray.push(
  new DailyRotateFile({
    filename: 'logs/error-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    level: 'error',
    zippedArchive: true,
    maxSize: '5m',
    maxFiles: '120d',
  }),
  new DailyRotateFile({
    filename: 'logs/combined-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '5m',
    maxFiles: '120d',
  }),
);

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'warn',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  transports: transportsArray,
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  );
}

export default logger;

