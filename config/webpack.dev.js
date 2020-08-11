const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval-source-map",
});
