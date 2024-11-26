'use strict';

const swaggerJsdoc = require('swagger-jsdoc');
const config = require('../../core/config/config');

const { port: PORT, host: HOST } = config;
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

module.exports = swaggerDocs;
