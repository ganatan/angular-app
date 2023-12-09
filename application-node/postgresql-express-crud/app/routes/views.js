const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/views');

router.get('/count', function (req, res, next) { ctrl.getItemsCount(req, res, next); })
router.get('/', function (req, res, next) { ctrl.getItems(req, res, next, false); });
router.get('/:id', function (req, res, next) { ctrl.getItem(req, res, next, false); });
router.delete('/:id', function (req, res, next) { ctrl.deleteItem(req, res, next, false); });
router.put('/:id', function (req, res, next) { ctrl.updateItem(req, res, next, false); });
router.post('/', function (req, res, next) { ctrl.createItem(req, res, next, false); });

module.exports = router;

