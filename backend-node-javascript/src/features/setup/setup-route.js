import express from 'express';
import handleResponse from '../../infrastructure/logger/response-handler.js';

import DatabaseService from './database-service.js';
import DomainService from './domain-service.js';
import TableService from './table-service.js';

import SetupController from './setup-controller.js';

const router = express.Router();

const databaseService = new DatabaseService();
const domainService = new DomainService();
const tableService = new TableService();

const controller = new SetupController(databaseService, domainService, tableService);

router.get('/create-database', controller.createDatabase, handleResponse);
router.get('/create-domains', controller.createDomains, handleResponse);
router.get('/delete-domains', controller.deleteDomains, handleResponse);
router.get('/create-tables', controller.createTables, handleResponse);

router.get('/', (req, res) => {
  res.json({
    applicationName: 'api/*',
    urls: [
      { name: '/create-database' },
      { name: '/create-domains' },
      { name: '/create-tables' },
    ],
  });
});

router.get('*', (req, res, next) => {
  const errorResponse = {
    error: 'Url Not Found',
  };
  res.locals.data = errorResponse;
  res.status(404);
  next();
}, handleResponse);

export default router;

