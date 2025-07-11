import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/server.js',
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist')
    },
    externals: {
      'cloudflare:sockets': 'commonjs cloudflare:sockets'
    },  
    target: 'node',
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    optimization: {
      minimize: isProduction,
    },
    experiments: {
      outputModule: true
    },
  }
}
