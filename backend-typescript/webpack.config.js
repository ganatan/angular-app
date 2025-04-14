const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server.ts', // Point d'entrée de l'application
  target: 'node', // Spécifique à une application Node.js
  mode: 'production', // Utilise le mode production pour minifier le code
  externals: [nodeExternals()], // Exclut les dépendances Node.js de l'application
  module: {
    rules: [
      {
        test: /\.ts$/, // Applique ts-loader sur les fichiers TypeScript
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // Résout les imports .ts et .js
  },
  output: {
    filename: 'bundle.js', // Nom du fichier JavaScript final
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie
  },
};
