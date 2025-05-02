import { Request, Response, NextFunction } from 'express';

interface Payload {
  data?: unknown;
  metadata?: unknown;
}

const responseHandler = (req: Request, res: Response, next: NextFunction): void => {
  if (res.headersSent) {
    return next();
  }

  const statusCode: number = res.locals.statusCode || 200;
  const payload: unknown = res.locals.data || null;

  const response: { success: true; data?: unknown; metadata?: unknown } = { success: true };

  if (payload && typeof payload === 'object' && 'metadata' in payload && 'data' in payload) {
    const parsedPayload = payload as Payload;
    response.metadata = parsedPayload.metadata;
    response.data = parsedPayload.data;
  } else {
    response.data = payload;
  }

  res.status(statusCode).json(response);

  return next();
};

export default responseHandler;
