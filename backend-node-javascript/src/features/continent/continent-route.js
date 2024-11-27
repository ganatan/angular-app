import express from 'express';
import handleResponse from '../../infrastructure/logger/response-handler.js';

import ContinentRepository from './continent-repository.js';
import ContinentService from './continent-service.js';

import ContinentController from './continent-controller.js';

const router = express.Router();

const repository = new ContinentRepository();
const service = new ContinentService(repository);
const controller = new ContinentController(service);

router.get('/', controller.getItems, handleResponse);
router.get('/:id', controller.getItem, handleResponse);
router.post('/', controller.createItem, handleResponse);
router.delete('/:id', controller.deleteItem, handleResponse);
router.put('/:id', controller.updateItem, handleResponse);

export default router;
