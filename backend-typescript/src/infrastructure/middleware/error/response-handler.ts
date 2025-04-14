import { Request, Response, NextFunction } from 'express';

interface MetadataPayload {
  metadata?: Record<string, unknown>;
  data?: unknown;
}

const responseHandler = (req: Request, res: Response, next: NextFunction): void => {
  if (res.headersSent) {
    return next();
  }

  const statusCode: number = res.locals.statusCode || 200;
  const payload: MetadataPayload | unknown = res.locals.data || null;

  const response: Record<string, unknown> = { success: true };

  if (
    typeof payload === 'object' && payload !== null && 'metadata' in payload && 'data' in payload
  ) {
    const { metadata, data } = payload as MetadataPayload;
    response.metadata = metadata;
    response.data = data;
  } else {
    response.data = payload;
  }

  res.status(statusCode).json(response);

  return next();
};

export default responseHandler;
