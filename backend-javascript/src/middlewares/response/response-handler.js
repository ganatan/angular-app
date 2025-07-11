function responseHandler(req, res, next) {
  if (res.headersSent) {
    return next();
  }

  const statusCode = res.locals.statusCode || 200;
  const payload = res.locals.data || null;

  const response = { success: true };

  if (payload && payload.metadata && payload.data) {
    response.metadata = payload.metadata;
    response.data = payload.data;
  } else {
    response.data = payload;
  }

  res.status(statusCode).json(response);

  return next();
}

export default responseHandler;
