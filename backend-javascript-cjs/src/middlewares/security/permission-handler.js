'use strict';

const HTTP_STATUS = require('../../shared/constants/http/http-status.js');

const permissionHandler = (allowedRoles = []) => {
  return (req, res, next) => {
    const userRole = req.user?.role;
    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(HTTP_STATUS.FORBIDDEN).json({
        success: false,
        message: 'Access denied',
      });
    }

    return next();
  };
};

module.exports = permissionHandler;
