import express from 'express';

import cityRoutes from '../modules/city/city.routes';

const router = express.Router();

router.use('/cities', cityRoutes);

export default router;
