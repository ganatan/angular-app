import path from 'path';
import { fileURLToPath } from 'url';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  entry: {
    server: './src/starter.js',
    'create-database': './tools/database-scripts/create-database.js',
    'create-domains': './tools/database-scripts/create-domains.js',
  },
  target: 'async-node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.mjs',
    chunkFilename: '[name].chunk.mjs',
    module: true,
    chunkFormat: 'module',
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'data/mock', to: 'data/mock' },
      ],
    }),
    new webpack.ProgressPlugin(),
    new webpack.IgnorePlugin({
      resourceRegExp: /^(kerberos|@mongodb-js\/zstd|pg-native|@aws-sdk\/credential-providers|gcp-metadata|snappy|socks|aws4|mongodb-client-encryption)$/,
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
