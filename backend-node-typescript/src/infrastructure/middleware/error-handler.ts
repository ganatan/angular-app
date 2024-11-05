import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
};
