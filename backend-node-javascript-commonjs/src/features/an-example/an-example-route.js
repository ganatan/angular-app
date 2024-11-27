'use strict';

const express = require('express');

const handleResponse = require('../../infrastructure/logger/response-handler.js');

const AnExampleController = require('./an-example-controller');

const router = express.Router();
const controller = new AnExampleController();

router.get('/', controller.getItems, handleResponse);

module.exports = router;
