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

const setupController = new SetupController(databaseService, domainService, tableService);

router.get('/create-database', setupController.createDatabase, handleResponse);
router.get('/create-domains', setupController.createDomains, handleResponse);
router.get('/delete-domains', setupController.deleteDomains, handleResponse);
router.get('/create-tables', setupController.createTables, handleResponse);

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

