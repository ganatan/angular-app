'use strict';

const express = require('express');
const router = express.Router();

const handleResponse = require('../../../infrastructure/logger/response-handler.js');
const db = require('./db-config');

const ContinentRepository = require('./continent-repository');
const ContinentService = require('./continent-service');
const ContinentController = require('./continent-controller');

const repository = new ContinentRepository(db);
const service = new ContinentService(repository);
const controller = new ContinentController(service);

router.get('/', controller.getItems, handleResponse);

module.exports = router;
