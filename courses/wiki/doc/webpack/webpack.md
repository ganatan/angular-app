# Rajouter la progression sur le build

npm install --save-dev webpack

Rajouter la progression lors du build


const webpack = require('webpack');

module.exports = {
  // votre configuration Webpack actuelle ici

  plugins: [
    new webpack.ProgressPlugin(),
  ],
};


"build": "webpack --progress",


# Erreur de build

sur ce genre de code

import continentsData from '../../../data/mock/continent-mock.json' assert { type: "json" };

Rajouter
  npm install @babel/plugin-syntax-import-assertions --save-dev

et dans .babelrc

  "plugins": ["@babel/plugin-syntax-import-assertions"]