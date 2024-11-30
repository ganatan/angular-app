'use strict';

const express = require('express');

const router = express.Router();

const continent = require('./features/continent/continent-route');

const continentExample01 = require('./features/examples/continent/example01/continent-route');
const continentExample02 = require('./features/examples/continent/example02/continent-route');
const continentExample03 = require('./features/examples/continent/example03/continent-route');
const continentExample04 = require('./features/examples/continent/example04/continent-route');
const continentExample05 = require('./features/examples/continent/example05/continent-route');
const continentExample06 = require('./features/examples/continent/example06/continent-route');
const continentExample07 = require('./features/examples/continent/example07/continent-route');
const continentExample08 = require('./features/examples/continent/example08/continent-route');
const continentExample09 = require('./features/examples/continent/example09/continent-route');

const imageExample01 = require('./features/examples/image/example01/item-route');

const index = require('./index-routes');

router.use('/continents', continent);

router.use('/continent-example01', continentExample01);
router.use('/continent-example02', continentExample02);
router.use('/continent-example03', continentExample03);
router.use('/continent-example04', continentExample04);
router.use('/continent-example05', continentExample05);
router.use('/continent-example06', continentExample06);
router.use('/continent-example07', continentExample07);
router.use('/continent-example08', continentExample08);
router.use('/continent-example09', continentExample09);

router.use('/image-example01', imageExample01);

router.use('/', index);
router.use('*', index);

module.exports = router;
