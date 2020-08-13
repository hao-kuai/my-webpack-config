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
  const assetsInfo = stats.toJson({ all: false, assets: true }).assets;
  console.log("构建完成 >>>>>>>>>>>>>");
  assetsInfo.forEach((element) => {
    const size = (element.size / 1024.0).toFixed(2);
    console.log(`${element.name} ${size}K`);
  });
  console.log("构建完成 <<<<<<<<<<<<<");
});
