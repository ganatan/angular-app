'use strict';

const helmet = require('helmet');
const cors = require('cors');

function configureSecurity(app) {
  app.use(helmet());
  app.use(cors());
}

module.exports = configureSecurity;
