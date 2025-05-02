'use strict';

const initLocals = (req, res, next) => {
  res.locals = res.locals || {};
  next();
};

module.exports = initLocals;
