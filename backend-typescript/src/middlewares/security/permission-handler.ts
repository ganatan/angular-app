import { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS } from '../../shared/constants/http/http-status';

interface User {
  username: string;
  role: string;
}

declare module 'express' {
  interface Request {
    user?: User;
  }
}

const permissionHandler = (allowedRoles: string[] = []) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const userRole = req.user?.role;
    if (!userRole || !allowedRoles.includes(userRole)) {
      res.status(HTTP_STATUS.FORBIDDEN).json({
        success: false,
        message: 'Access denied',
      });

      return;
    }

    next();
  };
};

export default permissionHandler;
