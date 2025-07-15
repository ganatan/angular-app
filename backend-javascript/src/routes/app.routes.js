import express from 'express';

import cityRoutes from '../modules/city/city.routes.js';
import continentRoutes from '../modules/continent/continent.routes.js';
import countryRoutes from '../modules/country/country.routes.js';
import personRoutes from '../modules/person/person.routes.js';
import professionRoutes from '../modules/profession/profession.routes.js';
import mediaTypeRoutes from '../modules/media-type/media-type.routes.js';
import mediaRoutes from '../modules/media/media.routes.js';

const router = express.Router();

router.use('/cities', cityRoutes);
router.use('/continents', continentRoutes);
router.use('/countries', countryRoutes);
router.use('/persons', personRoutes);
router.use('/professions', professionRoutes);
router.use('/medias', mediaRoutes);
router.use('/media-types', mediaTypeRoutes);

export default router;
