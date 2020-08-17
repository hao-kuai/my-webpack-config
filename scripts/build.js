"use strict";
const webpack = require("webpack");
const prodConfig = require("../config/webpack.prod.js");
const paths = require("../config/pathsUtil");
const { printFileSizesAfterBuild } = require("../config/FileSizeReporter");

const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

webpack(prodConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    // 在这里处理错误
    console.log("err:", err);
    console.log("stats:", stats);
  }
  // 处理完成
  console.log("File sizes after gzip:\n");
  printFileSizesAfterBuild(
    stats,
    paths.appBuild,
    WARN_AFTER_BUNDLE_GZIP_SIZE,
    WARN_AFTER_CHUNK_GZIP_SIZE
  );
  console.log("\n");
});
