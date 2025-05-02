'use strict';

const fakeAuth = (user = { username: 'editor_user', role: 'editor' }) => {
  return (req, res, next) => {
    req.user = user;
    next();
  };
};

module.exports = fakeAuth;
