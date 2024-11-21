import express from 'express';
import continentRoute from './features/continent/continent-route.js';
import setupRoute from './features/setup/setup-route.js';

const router = express.Router();

router.use('/continents', continentRoute);
router.use('/setup', setupRoute);

export default router;
