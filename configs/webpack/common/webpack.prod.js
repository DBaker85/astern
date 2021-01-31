const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const excludedFolders = /(__mocks__|node_modules)/;

const commonConfig = require("./webpack.common");
const PACKAGE = require("../../../package.json");

module.exports = merge(commonConfig, {
  mode: "production",

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: true,
        exclude: excludedFolders,
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        APP_VERSION: JSON.stringify(PACKAGE.version),
      },
    }),
    new HtmlWebpackPlugin({
      template: "index.pug",
      templateParameters(compilation, assets, options) {
        return {
          compilation,
          webpack: compilation.getStats().toJson(),
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            files: assets,
            options,
          },
          process: {
            ...process,
            env: { ...process.env, NODE_ENV: "production" },
          },
        };
      },
    }),
  ],
});
