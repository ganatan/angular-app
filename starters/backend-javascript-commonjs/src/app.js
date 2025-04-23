'use strict';

const express = require('express');
const getItems = require('./controllers/person');
const configureSecurity = require('./security');

const app = express();

configureSecurity(app);

app.get('/persons', getItems);

app.get('/', (req, res) => {
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

module.exports = app;
