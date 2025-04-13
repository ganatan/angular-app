const notFoundHandler = (req, res, next) => {
  if (res.locals.data === undefined) {
    const error = new Error('Resource not found');
    error.statusCode = 404;
    error.context = `${req.method} ${req.originalUrl}`;
    error.details = {
      path: req.originalUrl,
      errorCode: 404,
      timestamp: new Date().toISOString(),
    };

    return next(error);
  } else {
    return next();
  }
};

export default notFoundHandler;
