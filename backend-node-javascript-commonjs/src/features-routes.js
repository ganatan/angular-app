'use strict';

const express = require('express');

const router = express.Router();

const continent = require('./features/continent/continent-route');

const example01 = require('./features/an-example01/continent-route');
const example02 = require('./features/an-example02/continent-route');
const example03 = require('./features/an-example03/continent-route');
const example04 = require('./features/an-example04/continent-route');
const example05 = require('./features/an-example05/continent-route');
const example06 = require('./features/an-example06/continent-route');

const example10 = require('./features/an-example10/continent-route');

const index = require('./index-routes');

router.use('/continents', continent);

router.use('/example01', example01);
router.use('/example02', example02);
router.use('/example03', example03);
router.use('/example04', example04);
router.use('/example05', example05);
router.use('/example06', example06);

router.use('/example10', example10);

router.use('/', index);
router.use('*', index);

module.exports = router;
