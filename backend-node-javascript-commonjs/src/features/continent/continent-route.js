'use strict';

const express = require('express');
const router = express.Router();

const handleResponse = require('../../infrastructure/logger/response-handler');

const ContinentRepository = require('./continent-repository');
const ContinentService = require('./continent-service');
const ContinentController = require('./continent-controller');

const continentRepository = new ContinentRepository();
const continentService = new ContinentService(continentRepository);
const continentController = new ContinentController(continentService);

router.get('/', continentController.getItems, handleResponse);
router.get('/:id', continentController.getItem, handleResponse);
router.post('/', continentController.createItem, handleResponse);
router.delete('/:id', continentController.deleteItem, handleResponse);
router.put('/:id', continentController.updateItem, handleResponse);

module.exports = router;
