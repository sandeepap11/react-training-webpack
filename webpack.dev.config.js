const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.js");

module.exports = env =>
  merge(baseConfig(env), {
    devtool: "eval-source-map",

    devServer: {
      inline: true,
      contentBase: "src",
      port: "3001"
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  });
