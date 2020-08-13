const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
module.exports = smp.wrap(
  merge(baseConfig, {
    mode: "production",
    devtool: "source-map",
    plugins: [
      new CleanWebpackPlugin(),
      new OptimizeCssAssetsPlugin(),
      new BundleAnalyzerPlugin({ analyzerMode: "static" }),
      // 暂时屏蔽，太耗时
      //Make sure that the plugin is after any plugins that add images
      // new ImageminPlugin({
      //   pngquant: {
      //     quality: "95-100",
      //   },
      // }),
    ],
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
  })
);
