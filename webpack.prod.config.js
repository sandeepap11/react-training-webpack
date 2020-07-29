const webpack = require("webpack");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const baseConfig = require("./webpack.config.js");
const path = require("path");

module.exports = env =>
  merge(baseConfig(env), {
    entry: {
      index: "./src/index.js"
    },

    output: {
      // `filename` provides a template for naming your bundles (remember to use `[name]`)
      filename: "[name].bundle.js",
      // `chunkFilename` provides a template for naming code-split bundles (optional)
      chunkFilename: "[name].bundle.js",
      // `path` is the folder where Webpack will place your bundles
      path: path.resolve(__dirname, "build")
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },

    plugins: [
      // Extract imported CSS into own file
      new MiniCssExtractPlugin(),

      // Minify CSS
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ],
    optimization: {
      // Minify JS
      minimizer: [
        new UglifyJsPlugin({
          test: /\.js(\?.*)?$/i
        })
      ]
    }
  });
