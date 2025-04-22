import app from './app.js';

const port = 3000;

const server = app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});

export default server;
