import { Router } from 'express';

import config from '../../core/config/config';
import Repository from './profession.repository';
import Service from './profession.service';
import Controller from './profession.controller';

const router = Router();

const repository = new Repository(config.dbClient);
const service = new Service(repository);
const controller = new Controller(service);

router.get('/', controller.getItems);
router.get('/:id', controller.getItemById);
router.post('/', controller.createItem);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);

export default router;
