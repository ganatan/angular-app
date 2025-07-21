import { v4 as uuidv4 } from 'uuid';

const correlationIdMiddleware = (req, res, next) => {
  const existingId = req.header('X-Correlation-Id');
  req.correlationId = existingId || uuidv4();
  res.setHeader('X-Correlation-Id', req.correlationId);
  next();
};

export default correlationIdMiddleware;

// import { v4 as uuidv4 } from 'uuid';

// const correlationIdMiddleware = (req, res, next) => {
//   req.correlationId = uuidv4();
//   res.setHeader('X-Correlation-Id', req.correlationId);
//   next();
// };

// export default correlationIdMiddleware;
