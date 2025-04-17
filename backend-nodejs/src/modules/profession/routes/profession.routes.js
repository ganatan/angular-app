import express from 'express';
import config from '../../../core/config/config.js';

import permissionHandler from '../../../infrastructure/middleware/security/permission-handler.js';

import Repository from '../repositories/profession.repository.js';
import CommandService from '../services/profession.command.service.js';
import QueryService from '../services/profession.query.service.js';
import Controller from '../controllers/profession.controller.js';

const router = express.Router();

const repository = new Repository(config.dbClient);

const commandService = new CommandService(repository);
const queryService = new QueryService(repository);

const controller = new Controller({
  commandService,
  queryService,
});

const admin = permissionHandler(['admin']);
const editor = permissionHandler(['admin', 'editor']);

router
  .route('/')
  .get(editor, controller.getItems)
  .post(admin, controller.createItem);

router
  .route('/:id')
  .get(editor, controller.getItemById)
  .put(admin, controller.updateItem)
  .delete(admin, controller.deleteItem);

export default router;
