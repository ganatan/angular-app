import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { swaggerOptions } from './swagger.config.js';

const specs = swaggerJsdoc(swaggerOptions);
const router = express.Router();

router.use('/', swaggerUi.serve, swaggerUi.setup(specs));

export default router;
