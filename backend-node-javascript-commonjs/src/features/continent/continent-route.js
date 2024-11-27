'use strict';

const express = require('express');
const router = express.Router();

const handleResponse = require('../../infrastructure/logger/response-handler');

const ContinentRepository = require('./continent-repository');
const ContinentService = require('./continent-service');
const ContinentController = require('./continent-controller');

const repository = new ContinentRepository();
const service = new ContinentService(repository);
const controller = new ContinentController(service);

router.get('/', controller.getItems, handleResponse);
router.get('/:id', controller.getItem, handleResponse);
router.post('/', controller.createItem, handleResponse);
router.delete('/:id', controller.deleteItem, handleResponse);
router.put('/:id', controller.updateItem, handleResponse);

module.exports = router;
