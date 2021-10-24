const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const packageDeps = require("./package.json").dependencies;

module.exports = {
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "nav",
      filename: "remoteEntry.js",
      exposes: {
        "./Nav": "./src/index",
      },
      shared: {
        ...packageDeps,
        react: {
          singleton: true,
          requiredVersion: packageDeps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: packageDeps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
