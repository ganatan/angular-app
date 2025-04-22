import path from "path";

export default {
  entry: "./src/server.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  target: "node",
  mode: "production",
  experiments: {
    outputModule: true
  },
};
