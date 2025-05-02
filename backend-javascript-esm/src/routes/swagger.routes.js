import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from '../config/swagger.config.js';

const router = express.Router();
const swaggerSpec = swaggerJsdoc(swaggerOptions);

router.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customSiteTitle: 'Documentation API',
  }),
);

export default router;
