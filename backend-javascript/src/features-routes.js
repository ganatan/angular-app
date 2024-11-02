import express from 'express';
import continentRoutes from './features/continent/continent-route.js';
import setupRoutes from './features/setup/setup-route.js';

const router = express.Router();

router.use('/continents', continentRoutes);
router.use('/setup', setupRoutes);

export default router;
