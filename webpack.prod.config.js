const webpack = require("webpack");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const baseConfig = require("./webpack.config.js");
const path = require("path");

module.exports = env =>
  merge(baseConfig(env), {
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js"
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
