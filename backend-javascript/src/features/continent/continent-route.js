import express from 'express';
import handleResponse from '../../infrastructure/logger/response-handler.js';

import ContinentRepository from './continent-repository.js';
import ContinentService from './continent-service.js';

import ContinentController from './continent-controller.js';

const router = express.Router();

const continentRepository = new ContinentRepository();
const continentService = new ContinentService(continentRepository);
const continentController = new ContinentController(continentService);

router.get('/', continentController.getItems, handleResponse);
router.get('/:id', continentController.getItem, handleResponse);
router.post('/', continentController.createItem, handleResponse);
router.delete('/:id', continentController.deleteItem, handleResponse);
router.put('/:id', continentController.updateItem, handleResponse);

export default router;
