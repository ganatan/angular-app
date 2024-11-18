'use strict';

const express = require('express');
const cors = require('cors');
const compression = require('compression');
const swaggerUi = require('swagger-ui-express');

const swaggerDocs = require('./infrastructure/swagger/swagger-doc');
const handleResponse = require('./infrastructure/logger/response-handler');
const handleError = require('./infrastructure/errors/error-handler');
const requestLogger = require('./infrastructure/logger/request-logger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());

app.use(requestLogger);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const routes = require('./main-routes');

app.use('/', routes);

app.use(handleResponse);
app.use(handleError);

module.exports = app;

/*
app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
}));
*/
