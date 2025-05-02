import { Request, Response, NextFunction } from 'express';

export interface User {
  username: string;
  role: string;
}

declare module 'express' {
  interface Request {
    user?: User;
  }
}

const fakeAuth = (
  user: User = { username: 'editor_user', role: 'editor' },
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    req.user = user;
    next();
  };
};

export default fakeAuth;
