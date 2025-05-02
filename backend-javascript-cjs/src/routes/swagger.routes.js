'use strict';

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOptions = require('../config/swagger.config');

const router = express.Router();
const swaggerSpec = swaggerJsdoc(swaggerOptions);

router.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customSiteTitle: 'Documentation API',
  }),
);

module.exports = router;
