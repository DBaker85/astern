const { merge } = require("webpack-merge");
const { resolve } = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const commonProdConfig = require("./common/webpack.prod");

module.exports = merge(commonProdConfig, {
  context: resolve(__dirname, "..", "..", "docs"),
  entry: "./Index.tsx",
  output: {
    filename: "astern/js/bundle.[hash].min.js",
    path: resolve(__dirname, "..", "..", ".docs"),
    publicPath: "/",
  },

  devtool: "source-map",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "../reports/docs-analysis-report.html",
      openAnalyzer: false,
    }),
  ],
});
