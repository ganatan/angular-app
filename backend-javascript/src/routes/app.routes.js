import express from 'express';

import cityRoutes from '../modules/city/routes/city.routes.js';
import continentRoutes from '../modules/continent/routes/continent.routes.js';
import countryRoutes from '../modules/country/routes/country.routes.js';
import personRoutes from '../modules/person/routes/person.routes.js';
import professionRoutes from '../modules/profession/routes/profession.routes.js';
import mediaTypeRoutes from '../modules/media-type/routes/media-type.routes.js';
import mediaRoutes from '../modules/media/routes/media.routes.js';

const router = express.Router();

router.use('/cities', cityRoutes);
router.use('/continents', continentRoutes);
router.use('/countries', countryRoutes);
router.use('/persons', personRoutes);
router.use('/professions', professionRoutes);
router.use('/medias', mediaRoutes);
router.use('/media-types', mediaTypeRoutes);

export default router;
