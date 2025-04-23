import express from 'express';
import getItems from '../modules/person/person.js';

const router = express.Router();

router.use('/persons', getItems);

export default router;
