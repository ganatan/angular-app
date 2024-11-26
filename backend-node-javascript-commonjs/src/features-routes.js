'use strict';

const express = require('express');

const router = express.Router();

const continent = require('./features/continent/continent-route');
const anExample = require('./features/an-example/an-example-route');
const index = require('./index-routes');

router.use('/continents', continent);
router.use('/examples', anExample);

router.use('/', index);
router.use('*', index);

module.exports = router;
