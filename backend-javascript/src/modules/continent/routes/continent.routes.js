import express from 'express';

import { Controller, Service, Repository } from '../index.js';

import appConfig from '../../../config/app.config.js';

const router = express.Router();

const repository = new Repository(appConfig.app.dbClient);
const service = new Service(repository);
const controller = new Controller(service);

router.get('/', controller.getItems);
router.get('/:id', controller.getItemById);
router.post('/', controller.createItem);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);

export default router;
