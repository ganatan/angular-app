'use strict';

const express = require('express');
const router = express.Router();

const handleResponse = require('../../../../infrastructure/logger/response-handler.js');

const ItemRepository = require('./item-repository');
const ItemService = require('./item-service');
const ItemController = require('./item-controller');

const repository = new ItemRepository();
const service = new ItemService(repository);
const controller = new ItemController(service);

router.get('/', controller.getItems, handleResponse);

module.exports = router;
