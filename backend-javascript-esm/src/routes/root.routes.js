import express from 'express';
import appConfig from '../config/app.config.js';

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
  res.json(result);
});

export default router;
