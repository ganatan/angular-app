'use strict';

const express = require('express');
const cors = require('cors');
const compression = require('compression');
const swaggerUi = require('swagger-ui-express');

const swaggerDocs = require('./infrastructure/swagger/swagger-doc');
const handleResponse = require('./infrastructure/logger/response-handler');
const handleError = require('./infrastructure/errors/error-handler');
const requestLogger = require('./infrastructure/logger/request-logger');

// const featuresRoutes = require('./features-routes');
// const indexRoutes = require('./index-routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());

app.use(requestLogger);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// app.use(featuresRoutes);

// app.use('/', indexRoutes);
// app.use('*', indexRoutes);

app.use(handleResponse);
app.use(handleError);

module.exports = app;
