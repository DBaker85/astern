const { merge } = require("webpack-merge");
const { resolve } = require("path");

const commonDevConfig = require("./common/webpack.dev");

module.exports = merge(commonDevConfig, {
  context: resolve(__dirname, "..", "..", "docs"),
  entry: "./Index.tsx",
});
