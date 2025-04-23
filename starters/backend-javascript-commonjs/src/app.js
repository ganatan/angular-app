'use strict';

const express = require('express');
const configureSecurity = require('./configure-security.js');

const appRoutes = require('./routers/app.routes.js');
const rootRoutes = require('./routers/root.routes.js');

const app = express();

configureSecurity(app);

app.use(appRoutes);
app.use(rootRoutes);

module.exports = app;
