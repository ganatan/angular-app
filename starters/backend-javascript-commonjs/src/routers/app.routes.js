'use strict';

const express = require('express');
const getItems = require('../modules/person/person.js');

const router = express.Router();

router.use('/persons', getItems);

module.exports = router;
