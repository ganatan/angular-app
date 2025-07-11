import express from 'express';

import Repository from '../repositories/country.repository.js';
import Service from '../services/country.service.js';
import Controller from '../controllers/country.controller.js';

const router = express.Router();
import appConfig from '../../../config/app.config.js';
const repository = new Repository(appConfig.app.dbClient);

const service = new Service(repository);
const controller = new Controller(service);

router.get('/', controller.getItems);
router.get('/:id', controller.getItemById);
router.post('/', controller.createItem);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);

export default router;
