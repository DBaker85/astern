const { merge } = require("webpack-merge");
const { resolve } = require("path");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.tsx",
  output: {
    filename: "astern/js/bundle.[hash].min.js",
    path: resolve(__dirname, "../.docs"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "astern/fonts/",
          },
        },
      },
    ],
  },
  devtool: "source-map",
  plugins: [],
});
