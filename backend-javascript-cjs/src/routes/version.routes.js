'use strict';

const express = require('express');
const { versionInfo } = require('../config/version.config');

const router = express.Router();

router.get('/version', (req, res) => {
  res.status(200).json(versionInfo);
});

module.exports = router;
