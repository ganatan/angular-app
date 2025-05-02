import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    target: 'node',
    entry: './src/server.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server.js'
    },
    devtool: isProduction ? false : 'source-map',
    optimization: {
      minimize: isProduction,
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
};
