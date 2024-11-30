'use strict';

const express = require('express');
const router = express.Router();

const handleResponse = require('../../../../infrastructure/logger/response-handler.js');

const ContinentController = require('./continent-controller');

const controller = new ContinentController();

router.get('/', controller.getItems.bind(controller), handleResponse);

module.exports = router;
