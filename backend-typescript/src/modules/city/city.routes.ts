import express from 'express';

import Repository from './city.repository';
import Service from './city.service';
import Controller from './city.controller';

import appConfig from '../../config/app.config';
import permissionHandler from '../../middlewares/security/permission-handler';

const router = express.Router();

const repository = new Repository(appConfig.app.dbClient);
const service = new Service(repository);
const controller = new Controller(service);

const admin = permissionHandler(['admin']);
const editor = permissionHandler(['admin', 'editor']);

router.get('/', controller.getItems.bind(controller));

router.get('/authorized', editor, controller.getItems.bind(controller));
router.get('/denied', admin, controller.getItems.bind(controller));

router.post('/', editor, controller.createItem.bind(controller));
router.get('/:id', controller.getItemById.bind(controller));
router.put('/:id', editor, controller.updateItem.bind(controller));
router.delete('/:id', admin, controller.deleteItem.bind(controller));

export default router;

