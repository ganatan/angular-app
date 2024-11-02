const handleResponse = (req, res) => {
  if (res.locals.data) {
    return res.status(res.statusCode || 200).json(res.locals.data);
  }

  return res.status(500).json({ error: 'Internal Server Error' });
};

export default handleResponse;
