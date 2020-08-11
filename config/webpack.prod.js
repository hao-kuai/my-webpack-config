const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [new OptimizeCssAssetsPlugin()],
});
