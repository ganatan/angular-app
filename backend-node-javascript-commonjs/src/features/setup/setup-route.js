'use strict';

const express = require('express');
const router = express.Router();

const DatabaseService = require('./database-service');
const DomainService = require('./domain-service');
const TableService = require('./table-service');

const SetupController = require('./setup-controller');

const handleResponse = require('../../infrastructure/logger/response-handler');

const databaseService = new DatabaseService();
const domainService = new DomainService();
const tableService = new TableService();

const setupController = new SetupController(databaseService, domainService, tableService);

router.get('/create-database', setupController.createDatabase, handleResponse);
router.get('/create-domains', setupController.createDomains, handleResponse);
router.get('/create-tables', setupController.createTables, handleResponse);

router.get('/', (req, res, next) => {
  res.json(
    {
      applicationName: 'api/*',
      urls:
        [
          { name: '/create-database' },
          { name: '/create-domains' },
          { name: '/create-tables' },
        ],
    },
  );
});

router.get('*', (req, res, next) => {
  const errorResponse = {
    error: 'Url Not Found',
  };
  res.locals.data = errorResponse;
  res.status(404);
  next();
}, handleResponse);

module.exports = router;
