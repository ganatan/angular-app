'use strict';

const express = require('express');
const router = express.Router();

const handleResponse = require('../../../../infrastructure/logger/response-handler.js');
const getClient = require('./pg-client');

const ContinentRepository = require('./continent-repository');
const ContinentService = require('./continent-service');
const ContinentController = require('./continent-controller');

const dbClient = getClient();
const repository = new ContinentRepository(dbClient);
const service = new ContinentService(repository);
const controller = new ContinentController(service);

router.get('/', controller.getItems, handleResponse);

module.exports = router;
