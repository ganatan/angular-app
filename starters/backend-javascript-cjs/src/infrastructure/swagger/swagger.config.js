'use strict';

const path = require('path');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Backend Node.js API',
    version: '1.0.0',
    description: 'Documentation Swagger du backend fullstack JavaScript',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Serveur local',
    },
  ],
};

const swaggerOptions = {
  swaggerDefinition: swaggerDefinition,
  apis: [path.join(__dirname, '../../modules/**/*.swagger.js')],
};

module.exports = {
  swaggerDefinition,
  swaggerOptions,
};
