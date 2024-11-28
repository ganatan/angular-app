'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const items = [
    { name: 'continent0001' },
    { name: 'continent0002' },
    { name: 'continent0003' },
    { name: 'continent0004' },
  ];
  res.json(items);
});

module.exports = router;
