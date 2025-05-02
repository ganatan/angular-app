const fakeAuth = (user = { id: 2, username: 'editor_user', role: 'editor' }) => {
  return (req, res, next) => {
    req.user = user;
    next();
  };
};

export default fakeAuth;
