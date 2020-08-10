"use strict";
const webpack = require("webpack");
const prodConfig = require("../config/webpack.prod.js");
webpack(prodConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    // 在这里处理错误
    console.log("err:", err);
    console.log("stats:", stats);
  }
  // 处理完成
  console.log("处理完成");
});
