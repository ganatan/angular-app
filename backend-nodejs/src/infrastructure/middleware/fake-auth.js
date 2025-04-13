const fakeAuth = (user = { id: 1, username: 'admin_user', role: 'admin' }) => {
  return (req, res, next) => {
    req.user = user;
    next();
  };
};

export default fakeAuth;
