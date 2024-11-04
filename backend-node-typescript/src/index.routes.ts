import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the API');
});

router.use('*', (req: Request, res: Response) => {
  res.status(404).send('Route not found');
});

export default router;

