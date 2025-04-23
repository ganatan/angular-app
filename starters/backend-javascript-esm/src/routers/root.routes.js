import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const result = {
    success: true,
    data: {
      version: '1.0.0',
      status: 'ok',
      app: 'backend-javascript-esm',
    },
  };
  res.json(result);
});

export default router;
