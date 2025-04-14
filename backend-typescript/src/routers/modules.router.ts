import express from 'express';

import professionRouter from '../modules/profession/profession.router';

const router = express.Router();

router.use('/professions', professionRouter);

export default router;

