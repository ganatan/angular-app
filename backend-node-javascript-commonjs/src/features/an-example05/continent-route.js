'use strict';

const express = require('express');
const router = express.Router();

const handleResponse = require('../../infrastructure/logger/response-handler.js');
const ContinentService = require('./continent-service');
const ContinentController = require('./continent-controller');

const service = new ContinentService();
const controller = new ContinentController(service);

router.get('/', controller.getItems, handleResponse);

module.exports = router;
