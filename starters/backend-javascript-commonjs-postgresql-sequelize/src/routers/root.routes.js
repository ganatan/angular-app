'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const result = {
    success: true,
    data: {
      version: '1.0.0',
      status: 'ok',
      app: 'backend-javascript-commonjs',
    },
  };
  res.send(result);
});

module.exports = router;
