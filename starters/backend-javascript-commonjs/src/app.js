'use strict';

const express = require('express');
const getItems = require('./controllers/person');
const app = express();

app.get('/persons', getItems);

app.get('/', (req, res) => {
  res.send('backend-javascript-commonjs');
});

module.exports = app;
