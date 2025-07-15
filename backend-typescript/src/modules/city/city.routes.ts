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

router.get('/', controller.getItems);

router.get('/authorized', editor, controller.getItems);
router.get('/denied', admin, controller.getItems);

router.post('/', editor, controller.createItem);
router.get('/:id', controller.getItemById);
router.put('/:id', editor, controller.updateItem);
router.delete('/:id', admin, controller.deleteItem);

export default router;

