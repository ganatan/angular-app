const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    mode: isProduction ? 'production' : 'development',
    target: 'node',
    entry: './src/server.js',
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: isProduction ? false : 'source-map',
    optimization: {
      minimize: isProduction,
    },
  };
};
