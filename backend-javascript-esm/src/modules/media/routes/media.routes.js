import express from 'express';

import Repository from '../repositories/media.repository.js';
import BaseService from '../../../shared/generic/base.service.js';
import BaseController from '../../../shared/generic/base.controller.js';

import { ITEM_CONSTANTS } from '../constants/media.constant.js';
import { validateItem } from '../schemas/media.schema.js';

const router = express.Router();

import appConfig from '../../../config/app.config.js';

const repository = new Repository(appConfig.app.dbClient);
const service = new BaseService(repository, ITEM_CONSTANTS);
const controller = new BaseController(service, ITEM_CONSTANTS, { validateItem });

router.get('/', controller.getItems);
router.get('/:id', controller.getItemById);
router.post('/', controller.createItem);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);

export default router;
