const initLocals = (req, res, next) => {
  res.locals = res.locals || {};
  next();
};

export default initLocals;
