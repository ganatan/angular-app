import { Router } from 'express';
import { versionInfo } from '../config/version.config';

const router = Router();

router.get('/version', (req, res) => {
  res.status(200).json(versionInfo);
});

export default router;
