import express from 'express';

import cityRouter from '../modules/city/city.router.js';
import continentRouter from '../modules/continent/continent.router.js';
import countryRouter from '../modules/country/country.router.js';
import personRouter from '../modules/person/person.router.js';
import professionRouter from '../modules/profession/routes/profession.router.js';
import mediaTypeRouter from '../modules/media-type/media-type.router.js';
import mediaRouter from '../modules/media/media.router.js';

const router = express.Router();

router.use('/cities', cityRouter);
router.use('/continents', continentRouter);
router.use('/countries', countryRouter);
router.use('/persons', personRouter);
router.use('/professions', professionRouter);
router.use('/medias', mediaRouter);
router.use('/media-types', mediaTypeRouter);

export default router;

