const { merge } = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const baseConfig = require("./webpack.config.js");

module.exports = merge(baseConfig, {
  output: {
    path: "build",
    filename: "[name].bundle.[chunkhash].js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader"]
        })
      }
    ]
  },

  plugins: [
    // Extract imported CSS into own file
    new ExtractTextPlugin("[name].bundle.[chunkhash].css"),
    // Minify JS
    new UglifyJsPlugin({
      sourceMap: false,
      compress: true
    }),
    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
});
