import { Router } from 'express';
import continentRoutes from './features/continent/continent.routes';

const router = Router();

router.use('/continents', continentRoutes);

export default router;
