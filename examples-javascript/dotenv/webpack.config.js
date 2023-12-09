const path = require('path');

module.exports = {
//  mode: 'production',
  mode: 'development',
  entry: './src/server.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.js',
  },
  target: 'node'
};

