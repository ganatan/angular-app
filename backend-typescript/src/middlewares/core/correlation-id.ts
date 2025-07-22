import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

interface CorrelationIdRequest extends Request {
  correlationId?: string;
}

const correlationIdMiddleware = (req: CorrelationIdRequest, res: Response, next: NextFunction): void => {
  const existingId = req.header('X-Correlation-Id');
  req.correlationId = existingId || uuidv4();
  res.setHeader('X-Correlation-Id', req.correlationId);
  next();
};

export default correlationIdMiddleware;

