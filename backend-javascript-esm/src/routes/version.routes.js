import { Router } from 'express';
import { versionInfo } from '../config/version.config.js';

const router = Router();

router.get('/version', (req, res) => {
  res.status(200).json(versionInfo);
});

export default router;
