'use strict';

const express = require('express');

const handleResponse = require('../../infrastructure/logger/response-handler.js');

const AnExampleController = require('./an-example-controller');

const router = express.Router();
const anExampleController = new AnExampleController();

router.get('/', anExampleController.getItems, handleResponse);

module.exports = router;
