'use strict';

const express = require('express');

const handleResponse = require('./infrastructure/logger/response-handler');

const router = express.Router();
const config = require('./core/config/config');

const host = config.host;
const port = config.port;
const url = `http://${host}:${port}`;
const dbClient = config.db.client;

const apiPaths = {
  continents: '/continents',
  countries: '/countries',
  cities: '/cities',
  persons: '/persons',
  setup: '/setup',
};

const apiContinents = [
  {
    url: `${url}${apiPaths.continents}`,
    description: 'API to retrieve continents',
    methods: ['GET'],
  },
  {
    url: `${url}${apiPaths.continents}/:id`,
    description: 'API to retrieve, update or delete a specific continent',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
];

router.get('/', (req, res, next) => {
  const urls = {
    databaseType: dbClient,
    apis: [
      apiContinents,
      {
        url: `${url}${apiPaths.countries}`,
        description: 'API to retrieve countries',
        methods: ['GET'],
      },
      {
        url: `${url}${apiPaths.cities}`,
        description: 'API to retrieve countries',
        methods: ['GET'],
      },
      {
        url: `${url}${apiPaths.persons}`,
        description: 'API to retrieve countries',
        methods: ['GET'],
      },
      {
        url: `${url}${apiPaths.setup}`,
        description: 'API to retrieve countries',
        methods: ['GET'],
      },
    ],
  };
  res.locals.data = urls;
  next();
}, handleResponse);

router.use((req, res, next) => {
  const errorResponse = {
    status: 'error',
    message: 'Resource not found',
    url: req.originalUrl,
    errorCode: 404,
    timestamp: new Date().toISOString(),
  };
  res.locals.data = errorResponse;
  res.status(404);
  next();
}, handleResponse);

module.exports = router;
