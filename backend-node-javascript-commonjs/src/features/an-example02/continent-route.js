'use strict';

const express = require('express');
const router = express.Router();

const handleResponse = require('../../infrastructure/logger/response-handler.js');

const ContinentController = require('./continent-controller');

const controller = new ContinentController();

router.get('/', (req, res, next) => {
  controller.getItems(req, res, next);
}, handleResponse);

module.exports = router;
