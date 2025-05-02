'use strict';

const express = require('express');
const controller = require('../controllers/city.controller');

const permissionHandler = require('../../../middlewares/security/permission-handler');

const router = express.Router();

const admin = permissionHandler(['admin']);
const editor = permissionHandler(['admin', 'editor']);

router.get('/', controller.getItems.bind(controller));
router.get('/authorized', editor, controller.getItems.bind(controller));
router.get('/denied', admin, controller.getItems.bind(controller));
router.post('/', controller.createItem.bind(controller));

module.exports = router;
