import { HTTP_STATUS } from '../../shared/constants/http/http-status.js';

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

export default permissionHandler;
