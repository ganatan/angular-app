import express from 'express';

import configureSecurity from './infrastructure/middleware/security/security.js';

import appRoutes from './routers/app.routes.js';
import rootRoutes from './routers/root.routes.js';

const app = express();

configureSecurity(app);

app.use(appRoutes);
app.use(rootRoutes);

export default app;
