const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  plugins: [new CleanWebpackPlugin(), new OptimizeCssAssetsPlugin()],
});
