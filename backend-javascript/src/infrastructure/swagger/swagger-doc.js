import swaggerJsdoc from 'swagger-jsdoc';
import config from '../../core/config/config.js';

const ENV = process.env.NODE_ENV || 'development';
const { port: PORT, host: HOST } = config[ENV];
const url = `${HOST}:${PORT}`;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'angular-starter-backend API with Swagger',
      version: '1.0.0',
      description: 'angular-starter-backend Swagger documentation',
    },
    servers: [
      {
        url: `http://${url}`,
      },
    ],
  },
  apis: ['src/features/**/*-swagger.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export default swaggerDocs;
