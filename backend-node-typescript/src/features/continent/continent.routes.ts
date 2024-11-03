import { Router } from 'express';
import { getAllContinents, getContinent, createContinent, updateContinent, deleteContinent } from './continent.controller';

const router = Router();


router.get('/', getAllContinents);
router.get('/:id', getContinent);
router.post('/', createContinent);
router.put('/:id', updateContinent);
router.delete('/:id', deleteContinent);

export default router;
