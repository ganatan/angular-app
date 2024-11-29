'use strict';

const express = require('express');

const router = express.Router();

const continent = require('./features/continent/continent-route');

const example01 = require('./features/examples/example01/continent-route');
const example02 = require('./features/examples/example02/continent-route');
const example03 = require('./features/examples/example03/continent-route');
const example04 = require('./features/examples/example04/continent-route');
const example05 = require('./features/examples/example05/continent-route');
const example06 = require('./features/examples/example06/continent-route');
const example07 = require('./features/examples/example07/continent-route');
const example08 = require('./features/examples/example08/continent-route');
const example09 = require('./features/examples/example09/continent-route');

const index = require('./index-routes');

router.use('/continents', continent);

router.use('/example01', example01);
router.use('/example02', example02);
router.use('/example03', example03);w
router.use('/example04', example04);
router.use('/example05', example05);
router.use('/example06', example06);
router.use('/example07', example07);
router.use('/example08', example08);
router.use('/example09', example09);

router.use('/', index);
router.use('*', index);

module.exports = router;
