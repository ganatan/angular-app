import express from 'express';

import Repository from './city.repository';
import Service from './city.service';
import Controller from './city.controller';

import appConfig from '../../config/app.config';

const router = express.Router();

const repository = new Repository(appConfig.app.dbClient);
const service = new Service(repository);
const controller = new Controller(service);

router.get('/', controller.getItems);
router.post('/', controller.createItem);
router.get('/:id', controller.getItemById);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);

export default router;

