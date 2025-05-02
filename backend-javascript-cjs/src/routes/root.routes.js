'use strict';

const express = require('express');
const appConfig = require('../config/app.config');

const router = express.Router();

router.get('/', (req, res) => {
  const result = {
    success: true,
    data: {
      version: appConfig.app.version,
      status: 'ok',
      app: appConfig.app.name,
      env: process.env.NODE_ENV || 'development',
      dbClient: appConfig.app.dbClient,
    },
  };
  res.send(result);
});

module.exports = router;
